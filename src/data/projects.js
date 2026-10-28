/**
 * Centralized Project Data
 * Structured with scannable pattern:
 * [Problem/Objective] -> [Core Solution] -> [Key Technical Skills Applied]
 */

export const PROJECTS_DATA = [
  {
    id: 'wind-turbine-cad',
    title: 'Wind Turbine 3D CAD Design — SRE ITS EduTools',
    category: '3D CAD Design',
    categoryFull: 'Mechanical Design / Sustainable Energy',
    featured: true,
    coverImage: '/assets/projects/fusion360/preview-fusion360-wind-turbine.png',
    tools: ['Autodesk Fusion 360', '3D CAD Assembly', 'Parametric Modeling', 'Sustainable Energy'],
    objective: 'Provide a realistic, modular mechanical CAD visualization for renewable energy education within the SRE ITS student chapter.',
    solution: 'Engineered an authentic multi-component wind turbine model in Autodesk Fusion 360, comprising an aerofoil blade rotor, internal gearbox housing, clear acrylic nacelle cover, and structural mounting tower.',
    keySkillsApplied: 'Autodesk Fusion 360, Parametric 3D Modeling, Assembly Constraints, Mechanical Packaging, Renewable Energy Hardware.',
    keyLearnings: [
      'Parametric aerofoil blade modeling and multi-part assembly constraints in Autodesk Fusion 360',
      'Renewable wind power structural layout: nacelle casing, internal transmission hub, and tower foundation',
      'High-precision CAD rendering for academic and technical demonstration'
    ],
    gallery: [
      {
        title: 'Full Fusion 360 Assembly & Browser View',
        type: 'image',
        src: '/assets/projects/fusion360/preview-fusion360-wind-turbine.png',
        caption: 'Detailed Autodesk Fusion 360 CAD view showcasing nacelle casing, gearbox interface, and rotor assembly'
      }
    ]
  },
  {
    id: 'ansys-exhaust-manifold',
    title: 'Fluid Flow Velocity Analysis of 4-to-1 Exhaust Manifold',
    category: 'Engineering Simulation',
    categoryFull: 'Computational Fluid Dynamics / Engineering Simulation',
    featured: true,
    coverImage: '/assets/projects/ansys/Project Ansys Manifold Velocity Fluid.png',
    tools: ['ANSYS Fluent', 'CFD Simulation', 'Fluid Dynamics', 'Flow Visualization'],
    objective: 'Investigate internal aerodynamics, velocity distribution, and flow convergence behavior inside a 4-to-1 exhaust manifold geometry.',
    solution: 'Simulated viscous fluid flow dynamics in ANSYS Fluent to extract velocity contour distributions, streamline convergence, and pressure gradients across runner merger junctions.',
    keySkillsApplied: 'ANSYS Fluent, CFD Boundary Conditions, Flow Streamlines, Velocity Contour Analysis, Fluid Dynamics.',
    keyLearnings: [
      'CFD simulation setup, mesh domain verification, and convergence monitoring in ANSYS Fluent',
      'Interpretation of velocity magnitude contours and streamline convergence through manifold junctions',
      'Qualitative aerodynamic evaluation of runner geometry on internal exhaust backpressure'
    ],
    gallery: [
      {
        title: 'Velocity Contour & Streamline Distribution',
        type: 'image',
        src: '/assets/projects/ansys/Project Ansys Manifold Velocity Fluid.png',
        caption: 'ANSYS Fluent velocity magnitude contour visualization highlighting flow acceleration through runner convergence into the collector'
      }
    ]
  },
  {
    id: 'english-mastery-app',
    title: 'English Mastery — Oxford 3000 Vocabulary App',
    category: 'Web Development',
    categoryFull: 'Web Development / Educational Technology',
    featured: true,
    coverImage: '/assets/projects/english-mastery/Hone Page.png',
    tools: ['React', 'JavaScript', 'Supabase', 'Tailwind CSS', 'VS Code'],
    objective: 'Overcome vocabulary retention bottlenecks through structured Oxford 3000 word tiers, active recall flashcards, and automated streak tracking.',
    solution: 'Developed a high-performance web platform utilizing React and Supabase cloud authentication to deliver interactive flashcards, spaced review sessions, and real-time user progress synchronization.',
    keySkillsApplied: 'React.js, JavaScript, Supabase Auth & Database, Responsive UI Design, Active Recall Architecture.',
    liveUrl: 'https://zaidanaz.github.io/English-Mastery/review',
    keyLearnings: [
      'Modern Single Page Application (SPA) state management and responsive UI layout in React',
      'Cloud database synchronization with Supabase for persistent review streaks and user accounts',
      'Interactive card-flipping UX, phonetics integration, and spaced-repetition logic'
    ],
    gallery: [
      {
        title: 'Dashboard Overview',
        src: '/assets/projects/english-mastery/Hone Page.png'
      },
      {
        title: 'Flashcard Review',
        src: '/assets/projects/english-mastery/Preview App.png'
      },
      {
        title: 'Streak & Progress Tracker',
        src: '/assets/projects/english-mastery/Tracking Day.png'
      },
      {
        title: 'Supabase Cloud Integration',
        src: '/assets/projects/english-mastery/Supabase Backend Integrating.png'
      },
      {
        title: 'User Authentication Portal',
        src: '/assets/projects/english-mastery/Login Page.png'
      }
    ]
  }
];
