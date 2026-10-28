import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RotateCcw, Play, Pause, Maximize2, Minimize2, ZoomIn, Info, Loader2 } from 'lucide-react';

export default function Interactive3DViewer({
  modelPath = '/assets/projects/fusion360/wind-turbine.glb',
  title = 'Wind Turbine 3D CAD Assembly',
  height = '500px',
  fallbackImg = '/assets/projects/ansys/Project Ansys Manifold Velocity Fluid.png',
  isModal = false,
  onClose = null
}) {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(true);

  // References for Three.js state
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);
  const reqIdRef = useRef(null);
  const defaultCameraStateRef = useRef({ pos: [4, 4, 6], target: [0, 0, 0] });
  const userInteractingRef = useRef(false);
  const interactionTimeoutRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 600;
    const heightPx = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Transparent or warm subtle cream/navy gradient compatible background
    scene.background = new THREE.Color(0xFBF9F3);

    // Subtle fog for depth
    scene.fog = new THREE.FogExp2(0xFBF9F3, 0.035);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 100);
    camera.position.set(3.5, 3.2, 5.5);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.2;
    controls.maxDistance = 18;
    controls.maxPolarAngle = Math.PI / 2 + 0.1; // Don't flip under the floor too much
    controlsRef.current = controls;

    // Handle user manual interaction: pause auto-rotate during touch/mouse drag
    const onStartInteraction = () => {
      userInteractingRef.current = true;
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };

    const onEndInteraction = () => {
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
      // Resume auto rotation after 2.5s of inactivity
      interactionTimeoutRef.current = setTimeout(() => {
        userInteractingRef.current = false;
      }, 2500);
    };

    controls.addEventListener('start', onStartInteraction);
    controls.addEventListener('end', onEndInteraction);

    // Lighting
    // Soft Ambient
    const ambientLight = new THREE.AmbientLight(0xfff7e6, 1.4);
    scene.add(ambientLight);

    // Hemisphere light (soft blue sky, warm ground)
    const hemiLight = new THREE.HemisphereLight(0xdbeafe, 0xfff2d5, 0.8);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Key Directional Light (Sun)
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(8, 12, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // Rim Light (cool soft blue)
    const rimLight = new THREE.DirectionalLight(0x669bbc, 1.2);
    rimLight.position.set(-8, 5, -8);
    scene.add(rimLight);

    // Fill Light (warm crimson/cream glow)
    const fillLight = new THREE.DirectionalLight(0xffeedd, 0.9);
    fillLight.position.set(0, -5, 5);
    scene.add(fillLight);

    // Ground shadow receiver circle
    const shadowGeo = new THREE.CircleGeometry(4.5, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x003049,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.5;
    scene.add(shadowPlane);

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;

        // Auto compute bounding box and center
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Scale and center model so it fits neatly in view
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3.2 / (maxDim || 1);
        model.scale.setScalar(scale);

        // Center on X and Z, align bottom to near ground
        model.position.x = -center.x * scale;
        model.position.y = -box.min.y * scale - 1.5;
        model.position.z = -center.z * scale;

        // Traverse meshes to ensure shadows and material finish
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.roughness = Math.max(0.25, child.material.roughness || 0.4);
              child.material.metalness = Math.min(0.85, child.material.metalness || 0.2);
              child.material.needsUpdate = true;
            }
          }
        });

        scene.add(model);

        // Set default camera distance based on model
        const targetPos = new THREE.Vector3(3.2, 1.8, 4.2);
        camera.position.copy(targetPos);
        controls.target.set(0, 0.2, 0);
        controls.update();

        defaultCameraStateRef.current = {
          pos: [targetPos.x, targetPos.y, targetPos.z],
          target: [0, 0.2, 0]
        };

        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadProgress(percent);
        } else {
          // If total is not set in header, estimate
          setLoadProgress((prev) => Math.min(prev + 5, 95));
        }
      },
      (err) => {
        console.error('Error loading 3D model:', err);
        setError('Unable to load 3D CAD model file.');
        setLoading(false);
      }
    );

    // Animation Loop
    let lastTime = performance.now();
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      const currentTime = performance.now();
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Auto-rotation around Y axis if enabled and user isn't dragging
      if (modelRef.current && isRotating && !userInteractingRef.current) {
        modelRef.current.rotation.y += delta * 0.35; // smooth rotation
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer for responsiveness
    const resizeObserver = new ResizeObserver(() => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW > 0 && newH > 0) {
        cameraRef.current.aspect = newW / newH;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(newW, newH);
      }
    });
    resizeObserver.observe(container);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  // Handle Reset View
  const handleResetView = () => {
    if (!cameraRef.current || !controlsRef.current) return;
    const defaultState = defaultCameraStateRef.current;
    
    // Smooth transition or direct restore
    cameraRef.current.position.set(...defaultState.pos);
    controlsRef.current.target.set(...defaultState.target);
    controlsRef.current.update();

    if (modelRef.current) {
      modelRef.current.rotation.set(0, 0, 0);
    }
  };

  // Toggle Auto-rotation
  const toggleRotation = () => {
    setIsRotating((prev) => !prev);
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#FFFDF7] to-[#F5EFE0] border border-softblue/30 shadow-premium transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen' : ''
      }`}
      style={{ height: isFullscreen ? '100vh' : height }}
    >
      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
      />

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-cream/90 backdrop-blur-sm p-6 text-center">
          <div className="relative mb-4">
            <Loader2 className="w-12 h-12 text-crimson animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-navy">
              {loadProgress}%
            </div>
          </div>
          <h4 className="text-navy font-display font-semibold text-lg">Loading 3D CAD Assembly...</h4>
          <p className="text-navy/70 text-sm max-w-sm mt-1">
            Parsing authentic Autodesk Fusion 360 wind turbine model and mesh geometries.
          </p>
          <div className="w-48 h-2 bg-softblue/20 rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-crimson transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(loadProgress, 8)}%` }}
            />
          </div>
        </div>
      )}

      {/* Error Fallback */}
      {error && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-cream/95 p-6 text-center">
          <div className="p-3 bg-crimson/10 rounded-full mb-3 text-crimson">
            <Info className="w-8 h-8" />
          </div>
          <h4 className="text-navy font-display font-semibold text-base mb-1">Interactive 3D Preview Notice</h4>
          <p className="text-navy/70 text-sm max-w-md mb-4">{error}</p>
          {fallbackImg && (
            <img
              src={fallbackImg}
              alt="Model fallback"
              className="max-h-48 rounded-lg shadow-md border border-navy/10 object-contain"
            />
          )}
        </div>
      )}

      {/* Top Floating Header & Badges */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-softblue/30 shadow-sm text-xs font-medium text-navy">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span>Interactive Fusion 360 3D CAD</span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-white/90 hover:bg-white text-navy font-medium text-xs rounded-full border border-softblue/30 shadow-sm transition-all"
            >
              Close
            </button>
          )}
        </div>
      </div>

      {/* Interactive Helper Banner */}
      {showHelp && !loading && (
        <div className="absolute top-16 left-4 z-10 pointer-events-none">
          <div className="bg-navy/90 text-white backdrop-blur-md text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2.5">
            <span className="text-cream font-semibold">Controls:</span>
            <span>Drag to rotate • Scroll / Pinch to zoom</span>
            <button
              onClick={() => setShowHelp(false)}
              className="pointer-events-auto text-white/60 hover:text-white ml-1 text-sm font-bold"
              aria-label="Dismiss help"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        {/* Left: Auto-rotation & Reset View Buttons */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={toggleRotation}
            title={isRotating ? 'Pause 360° auto-rotation' : 'Resume 360° auto-rotation'}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/90 hover:bg-white text-navy text-xs font-medium rounded-xl border border-softblue/30 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            {isRotating ? (
              <>
                <Pause className="w-3.5 h-3.5 text-crimson" />
                <span>Pause Spin</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-green-600" />
                <span>Auto Spin</span>
              </>
            )}
          </button>

          <button
            onClick={handleResetView}
            title="Reset camera and model orientation"
            className="flex items-center gap-1.5 px-3 py-2 bg-white/90 hover:bg-white text-navy text-xs font-medium rounded-xl border border-softblue/30 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5 text-navy/70" />
            <span>Reset View</span>
          </button>
        </div>

        {/* Right: Fullscreen / Maximize toggle */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen((prev) => !prev)}
            title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
            className="p-2 bg-white/90 hover:bg-white text-navy rounded-xl border border-softblue/30 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-crimson" />
            ) : (
              <Maximize2 className="w-4 h-4 text-navy/80" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
