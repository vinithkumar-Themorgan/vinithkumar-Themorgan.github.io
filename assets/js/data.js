/* ===================================================================
   ⭐ EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO ⭐
   Everything below drives the Skills, Projects, Experience and
   Achievements sections. No HTML/CSS knowledge required — just edit
   the text between the quotes and add/remove blocks.
   =================================================================== */

/* -------------------------------------------------------------------
   HERO ROTATING TITLES  — words that cycle under your name
------------------------------------------------------------------- */
var ROTATING_TITLES = [
  "autonomous drones.",
  "AMR mobile robots.",
  "six-axis robot arms.",
  "RF & waveguide systems.",
  "full-stack robotics.",
];

/* -------------------------------------------------------------------
   SKILLS  — grouped cards, each with an OPTIONAL mini demo video.

   icon   : emoji shown when there is no video (fallback)
   title  : the skill group name
   tags   : the little pills under the card
   video  : (optional) a short 3–6 s MUTED clip, e.g.
            "assets/media/skills/slam.mp4"
            → plays on hover (desktop) / when scrolled into view (mobile)
   poster : (optional) a still frame shown before the video plays, e.g.
            "assets/media/skills/slam.jpg"

   Leave video/poster as "" and the card just shows the emoji icon.
   Keep clips SMALL (aim < 2 MB each) — I can compress them for you.
------------------------------------------------------------------- */
var SKILLS = [
  {
    icon: "🤖",
    title: "Robotics & Autonomy",
    tags: ["ROS / ROS2", "SLAM", "Perception", "Navigation Stack",
           "Forward & Inverse Kinematics", "Sensor Fusion", "Foxglove Studio"],
    video: "",   // e.g. "assets/media/skills/autonomy.mp4"
    poster: "",  // e.g. "assets/media/skills/autonomy.jpg"
  },
  {
    icon: "👁️",
    title: "Computer Vision & AI",
    tags: ["OpenCV", "YOLO", "Roboflow", "Object Detection", "Perception"],
    video: "",
    poster: "",
  },
  {
    icon: "💻",
    title: "Programming & Software",
    tags: ["Python", "C++", "AI-Assisted Dev", "Rapid Prototyping", "UI / Interfaces via Prompting"],
    video: "",
    poster: "",
  },
  {
    icon: "⚙️",
    title: "Embedded & Electronics",
    tags: ["ESP32 / STM32", "UART · I2C · SPI", "CAN · RS485",
           "Sensor / Driver / Encoder Integration", "Testing & Troubleshooting"],
    video: "",
    poster: "",
  },
  {
    icon: "🛸",
    title: "Drones & Aerial Systems",
    tags: ["Drone Design", "Fabrication", "Pixhawk", "PX4 / ArduPilot", "CFD Simulation"],
    video: "",
    poster: "",
  },
  {
    icon: "📡",
    title: "RF & Microwave",
    tags: ["Waveguide Design", "RF Analysis", "mmWave Concepts", "RF Sensors"],
    video: "",
    poster: "",
  },
  {
    icon: "📐",
    title: "3D Design & Mechanical",
    tags: ["SolidWorks + Simulation", "Onshape", "Sheet Metal Design",
           "Gears & Transmissions", "Motion Dynamics", "3D Printing & Debugging"],
    video: "",
    poster: "",
  },
  {
    icon: "🛠️",
    title: "Fabrication & Hardware",
    tags: ["MIG Welding", "Sheet Metal Fabrication", "Laser Cutting", "CNC Programming",
           "Lathe & Milling", "Bending", "Routing"],
    video: "",
    poster: "",
  },
  {
    icon: "🎛️",
    title: "IoT, HMI & Controls",
    tags: ["IoT · MQTT", "Node-RED", "HMI Design", "Control Panel Wiring & Design"],
    video: "",
    poster: "",
  },
];

/* -------------------------------------------------------------------
   PROJECTS  — the star of the show.
   Each project opens a modal with a video + image gallery.

   category : "drone" | "amr" | "arm" | "vision" | "industrial"  (drives the filter)
   award    : (optional) a short badge shown on the card, e.g. "🏆 KAVACH 2023 — Winner"
   meta     : (optional) dates / affiliation shown in the popup
   thumb    : card image  (put files in assets/media/thumbs/)
   video    : { type: "mp4", src: "assets/media/video/xxx.mp4" } OR { type:"youtube", id:"..." } OR null
   gallery  : array of image paths (assets/media/img/)  — optional
   links    : [{ label, url }]  — optional (GitHub, demo, paper...)
------------------------------------------------------------------- */
var PROJECTS = [
  {
    category: "drone", catLabel: "Drone",
    title: "Medical Emergency Response Drone",
    short: "GPS-guided drone that reaches accident sites and triages patient injuries with deep learning.",
    meta: "Jun 2022 – Aug 2022 · Bannari Amman Institute of Technology",
    award: "🥈 Smart India Hackathon — 2nd Runner-Up (Govt. of India)",
    description:
      "With ~1,200 road crashes a day in India, this drone shortens the gap between an accident and medical help. It receives the crash GPS location from an IoT-connected vehicle, autonomously flies there over a telemetry link, captures the scene and classifies patient injury severity with a supervised deep-learning model — then alerts the nearest hospital so responders arrive prepared.",
    highlights: [
      "IoT vehicle → processor → telemetry-radio link drives the drone to the crash location",
      "On-board camera + supervised deep-learning model classifies injury severity (mild / heavy)",
      "Auto-sends injury type, GPS location and patient photo to the nearest hospital",
    ],
    tech: ["Telemetry", "Deep Learning", "Computer Vision", "IoT"],
    thumb: "assets/media/thumbs/43.PNG",
    video: { type: "mp4", src: "assets/media/video/S5.mp4" }, gallery: [], links: [],
  },
  {
    category: "drone", catLabel: "Drone",
    title: "Autonomous Package Delivery Drone",
    short: "Quadrotor that finds an ArUco marker with a depth camera and delivers a package autonomously.",
    meta: "Nov 2022 – Jan 2023 · Bannari Amman Institute of Technology",
    award: "🎖️ Flipkart GRID 4.0 — Excellence Award",
    description:
      "A customised delivery drone that autonomously locates a package via an ArUco marker, picks it up and delivers it accurately. A depth camera and image processing detect the marker; the drone navigates to it and completes a smooth pick-and-drop. The airframe was built from lightweight aluminium composite.",
    highlights: [
      "ArUco-marker detection with a depth camera and image processing",
      "Autonomous navigate → align → pick → deliver sequence",
      "Lightweight aluminium-composite custom airframe",
    ],
    tech: ["ArUco", "Depth Camera", "OpenCV", "Pixhawk", "Autonomous Navigation"],
    thumb: "assets/media/thumbs/2.jpeg",
    video: { type: "mp4", src: "assets/media/video/S7.mp4" }, gallery: [], links: [],
  },
  {
    category: "drone", catLabel: "Drone",
    title: "H-Configuration CFD-Optimized Drone",
    short: "H-frame drone tuned with CFD simulation for stability, aerodynamic efficiency and precise flight.",
    meta: "2023",
    award: "🏁 Aerathon 2023 (SAE)",
    description:
      "An H-configuration drone engineered for exceptional stability and precision. The airframe was optimised through Computational Fluid Dynamics (CFD) to cut drag and improve aerodynamic efficiency, with careful attention to centre of gravity, structural balance and the flight-control system — delivering smooth, dependable flight for inspection, mapping and surveillance.",
    highlights: [
      "Airframe optimised with CFD simulation for low drag and high efficiency",
      "Engineered CG, structural balance and aerodynamic profile for stability",
      "Tuned flight-control system validated through rigorous testing",
    ],
    tech: ["CFD Simulation", "Aerodynamics", "Flight Control", "CAD", "Pixhawk"],
    thumb: "assets/media/thumbs/33.jpg",
    video: { type: "mp4", src: "assets/media/video/S8.mp4" }, gallery: [], links: [],
  },
  {
    category: "amr", catLabel: "Mobile Manipulator",
    title: "Autonomous Mobile Manipulator (AMM)",
    short: "Mobile robot that detects, approaches, grasps and transports objects using vision and a robotic arm.",
    meta: "May 2023 – Jun 2023",
    award: "🚀 Earned an internship offer from Mistral Solutions",
    description:
      "An AMM that autonomously detects, approaches, grasps and transports objects. A Raspberry Pi with a Pi Camera handles real-time perception, object detection, motion planning and control of both a differential-drive base and a robotic arm — navigating to a target, aligning, grasping, then delivering it to a set destination while avoiding obstacles.",
    highlights: [
      "Raspberry Pi vision pipeline: detect → localize → plan → grasp",
      "Differential-drive base + robotic arm with end-effector for pick-and-place",
      "Autonomous navigation with obstacle avoidance to a predefined drop point",
    ],
    tech: ["Raspberry Pi", "Computer Vision", "Robotic Arm", "Object Detection", "Motion Planning"],
    thumb: "assets/media/thumbs/11.jpeg",
    video: null, gallery: [], links: [],
  },
  {
    category: "amr", catLabel: "AMR",
    title: "Security Autonomous Mobile Robot",
    short: "From-scratch security AMR: custom chassis, ROS SLAM navigation and an AI surveillance turret.",
    meta: "Feb 2024 – Apr 2024 · Bannari Amman Institute of Technology",
    description:
      "A security AMR built entirely from scratch — mechanical chassis, electronics, embedded systems, autonomous navigation, AI vision and IoT. A custom metal chassis on encoder DC motors runs ROS; an RPLIDAR A2M8 + IMU drive SLAM (Gmapping), EKF sensor fusion and DWA path planning. A motorized turret with an Intel RealSense D435i performs real-time AI threat detection, all monitored from an IoT dashboard.",
    highlights: [
      "Custom chassis, encoder DC motors and a full ROS navigation stack",
      "RPLIDAR + IMU SLAM with EKF fusion and DWA obstacle avoidance",
      "AI surveillance turret (RealSense D435i) + live IoT monitoring dashboard",
    ],
    tech: ["ROS", "RPLIDAR A2M8", "SLAM", "EKF", "RealSense D435i", "AI Vision", "IoT"],
    thumb: "assets/media/thumbs/58.jpeg",
    video: { type: "mp4", src: "assets/media/video/S1.mp4" }, gallery: [], links: [],
  },
  {
    category: "amr", catLabel: "Quadruped",
    title: "Quadruped Robot for Elderly Assistance",
    short: "Four-legged robot designed and simulated with inverse kinematics in Gazebo (ROS).",
    meta: "2023 · Bannari Amman Institute of Technology",
    award: "📄 Published — IRE Journals, Vol. 7 Issue 4 (2023)",
    description:
      "Design, fabrication and control of a quadruped robot aimed at assisting elderly people. The gait and leg motion were developed with inverse kinematics and validated in a Gazebo (ROS) simulation. Published in IRE Journals (Vol. 7, Issue 4, 2023, pp. 238–242).",
    highlights: [
      "Inverse-kinematics leg control for a four-legged gait",
      "Full design, fabrication and control pipeline",
      "Validated in Gazebo / ROS — peer-reviewed publication",
    ],
    tech: ["ROS", "Gazebo", "Inverse Kinematics", "Quadruped", "CAD"],
    thumb: "assets/media/thumbs/quadruped.jpg",
    video: null, gallery: [], links: [],
  },
  {
    category: "arm", catLabel: "Manipulator",
    title: "UR5-Inspired Arm — Custom IK + Barcode Vision",
    short: "Articulated manipulator with a custom inverse-kinematics solver and barcode-guided pick-and-place.",
    meta: "Sep 2023 – Oct 2023 · Bannari Amman Institute of Technology",
    award: "🌐 Flipkart GRID 5.0 — National Finalist",
    description:
      "A UR5-inspired articulated manipulator built for industrial logistics. A custom inverse-kinematics solver computes joint configurations for smooth, precise end-effector positioning, while a vision system detects and decodes barcodes to identify targets and run autonomous pick-and-place — reducing manual handling and boosting throughput.",
    highlights: [
      "Custom inverse-kinematics solver for precise end-effector control",
      "Barcode detection & decoding for target identification",
      "Autonomous barcode → localize → plan → pick → place workflow",
    ],
    tech: ["Inverse Kinematics", "Computer Vision", "Barcode", "Motion Planning", "Python"],
    thumb: "assets/media/thumbs/77.png",
    video: { type: "mp4", src: "assets/media/video/S12.mp4" }, gallery: [], links: [],
  },
  {
    category: "arm", catLabel: "Six-Axis",
    title: "Autonomous Six-Axis Sorting Robot",
    short: "From-scratch 6-DOF arm with deep learning, 3D vision and custom IK for warehouse package sorting.",
    meta: "Nov 2023 – Dec 2023 · Bannari Amman Institute of Technology",
    award: "📜 Patent Applied · 🌐 Flipkart GRID 5.0",
    description:
      "A six-axis articulated robot built from scratch to automate package sorting for e-commerce warehouses. A custom IK solver drives precise 6-DOF motion; deep-learning models and 3D vision detect, classify and estimate the pose of packages of varying size and shape in real time. The robot computes an optimal grasp, reorients packages and sorts them — the basis of a filed patent.",
    highlights: [
      "Custom inverse-kinematics solver for 6-DOF motion planning",
      "Deep learning + 3D vision for package detection, classification & pose",
      "Dynamic grasp + reorientation for reliable autonomous sorting",
    ],
    tech: ["Six-Axis", "Deep Learning", "3D Vision", "Inverse Kinematics", "Pose Estimation"],
    thumb: "assets/media/thumbs/55.jpg",
    video: { type: "mp4", src: "assets/media/video/SF1.mp4" }, gallery: [], links: [],
  },
  {
    category: "rf", catLabel: "RF & Waveguide",
    title: "mmWave Waveguide — Single-Person Vital-Sign Detection",
    short: "Custom pyramidal waveguide that narrows an mmWave radar beam to isolate one person's heart & respiration rate.",
    meta: "Research & Development",
    description:
      "A custom pyramidal waveguide designed and fabricated to improve the MR60BH2 mmWave heartbeat & respiration sensor. The sensor measures heart and respiratory rate contactlessly via mmWave radar, but its wide ~5 m beam picks up reflections from multiple people, hurting accuracy. The waveguide focuses and confines the outgoing beam into a narrow, directional pattern — suppressing side reflections so the sensor locks onto a single subject. Suited to patient monitoring, elderly care and contactless biometric sensing.",
    highlights: [
      "Designed & fabricated a pyramidal waveguide to narrow the mmWave beam",
      "Suppressed beam spread and side reflections to isolate a single individual",
      "Experimentally validated — more stable, accurate heart & respiration readings",
    ],
    tech: ["mmWave Radar", "Waveguide Design", "RF Analysis", "MR60BH2", "Beam Shaping"],
    thumb: "assets/media/thumbs/waveguide.jpg",
    video: null, gallery: ["assets/media/img/waveguide-detail.jpg"], links: [],
  },
  {
    category: "vision", catLabel: "AI & Vision",
    title: "Next-Gen Crime Detection System",
    short: "AI-vision system that detects crimes in CCTV footage and alerts a centralized dashboard in real time.",
    meta: "Jul 2023 – Aug 2023 · Bannari Amman Institute of Technology",
    award: "🏆 KAVACH 2023 — Winner (Govt. of India)",
    description:
      "An AI-powered system that automatically identifies criminal activity and security violations in CCTV footage using computer vision and deep learning. On detection it raises an instant alert to a centralized dashboard showing date, time, crime category, location, severity and live feed, and logs every incident (with camera IP and evidence) to a database with automated report generation. The project won KAVACH 2023 and the team (\"Little Champs\") was featured in The Hindu.",
    highlights: [
      "Deep-learning classification of suspicious activity from CCTV frames",
      "Real-time alerts to a centralized monitoring dashboard",
      "Incident database + automated report generation for authorities",
      "🗞️ Covered by The Hindu — \"BIT students win first prize in national hackathon\" (20 Aug 2023)",
    ],
    tech: ["Deep Learning", "Computer Vision", "OpenCV", "Dashboard", "Database"],
    thumb: "assets/media/thumbs/53.png",
    video: { type: "mp4", src: "assets/media/video/CS3.mp4" },
    gallery: ["assets/media/img/1692765537460.jfif"], links: [],
  },
  {
    category: "amr", catLabel: "AMR · Company",
    title: "EdTech AMR — ROS Navigation Stack",
    short: "Teaching AMR built end to end on a full ROS (ROS1) navigation stack to demonstrate autonomous navigation to students.",
    meta: "Company project",
    award: "💼 Part of a ₹1-crore project win",
    description:
      "An autonomous mobile robot built for an EdTech purpose — showing college students how AMR navigation works. This platform runs a full ROS (ROS1) navigation stack, built end to end: mapping, localization, path planning and obstacle avoidance. Together with its ROS2 sibling, it helped the company secure a ₹1-crore-worth project.",
    highlights: [
      "Full ROS (ROS1) navigation stack built end to end",
      "SLAM mapping, AMCL localization, path planning & obstacle avoidance",
      "Teaching platform that helped anchor a ₹1-crore company project",
    ],
    tech: ["ROS", "Navigation Stack", "SLAM", "AMCL", "AMR"],
    thumb: "assets/media/thumbs/111.png",
    video: { type: "mp4", src: "assets/media/video/S2.mp4" }, gallery: [], links: [],
  },
  {
    category: "amr", catLabel: "AMR · Company",
    title: "EdTech AMR — ROS2 Navigation Stack",
    short: "Teaching AMR built end to end on a full ROS2 / Nav2 navigation stack to demonstrate autonomous navigation to students.",
    meta: "Company project",
    award: "💼 Part of a ₹1-crore project win",
    description:
      "A second autonomous mobile robot built for the same EdTech purpose, this one running a full ROS2 navigation stack (Nav2), built end to end. It gives students a modern, up-to-date view of AMR autonomy alongside the ROS1 platform. Together the pair helped the company secure a ₹1-crore-worth project.",
    highlights: [
      "Full ROS2 / Nav2 navigation stack built end to end",
      "Modern autonomy: SLAM, Nav2 planning & dynamic obstacle avoidance",
      "Teaching platform that helped anchor a ₹1-crore company project",
    ],
    tech: ["ROS2", "Nav2", "Navigation Stack", "SLAM", "AMR"],
    thumb: "assets/media/thumbs/231.png",
    video: { type: "mp4", src: "assets/media/video/new-projecte.mp4" }, gallery: [], links: [],
  },
  {
    category: "amr", catLabel: "AMR · Company",
    title: "NETSCOUT — Autonomous Network Scouting Robot",
    short: "AMR with a WiFi-analysis turret that waypoint-navigates to 5–10 mm accuracy and builds WiFi heatmaps over a LiDAR map.",
    meta: "Company project",
    description:
      "An autonomous network-scouting and navigation robot. It carries a custom turret for WiFi / RF signal analysis and uses multiple controllers — including a custom waypoint-based controller — to reach 5–10 mm navigation accuracy. It fuses WiFi signal strength with a LiDAR map to produce WiFi heatmaps, monitored through a live AMR dashboard.",
    highlights: [
      "Custom turret for WiFi / RF signal analysis",
      "Custom waypoint controller achieving 5–10 mm navigation accuracy",
      "WiFi heatmap overlaid on a LiDAR-built map + live AMR dashboard",
    ],
    tech: ["ROS", "LiDAR", "WiFi / RF Analysis", "Waypoint Control", "Dashboard"],
    thumb: "assets/media/thumbs/netscout.jpg",
    video: null, gallery: [], links: [],
  },
  {
    category: "industrial", catLabel: "Power Electronics",
    title: "PID Pure Sine-Wave Inverter with IoT Monitoring",
    short: "Microcontroller PID-controlled pure sine-wave inverter with closed-loop regulation and a Node-RED IoT dashboard.",
    meta: "Research & Development",
    description:
      "A microcontroller-based pure sine-wave inverter that holds a stable AC output under varying load using closed-loop PID control. It reads battery voltage, battery current and AC output current in real time, and the PID controller adjusts the PWM duty cycle and sine-generation parameters to regulate voltage, cut waveform distortion and improve efficiency. A Node-RED IoT dashboard visualises live battery and output parameters, load status and performance for remote monitoring and diagnostics.",
    highlights: [
      "Closed-loop PID control of the PWM duty cycle for a regulated pure sine wave",
      "Real-time feedback from battery-voltage, battery-current & AC-output-current sensors",
      "Node-RED IoT dashboard for live parameters, load status & diagnostics",
    ],
    tech: ["PID Control", "Power Electronics", "PWM", "Embedded", "Node-RED", "IoT"],
    thumb: "assets/media/thumbs/345.png",
    video: { type: "mp4", src: "assets/media/video/cvc.mp4" }, gallery: [], links: [],
  },
  {
    category: "industrial", catLabel: "Industrial",
    title: "Industrial Burner Integration — Tank Manufacturing",
    short: "Installed and integrated burners for heat treatment, forming and QA in a tank-making industry.",
    meta: "Apr 2021 – May 2021",
    description:
      "Hands-on installation and integration of burners in a tank-manufacturing plant. Burners provide the heat for stress-relieving and annealing, flame surface cleaning, curing coatings, and simulating extreme conditions for QA — plus forming sheet metal and hydrostatic-test support. Focused on precise, repeatable heat control across the production line.",
    highlights: [
      "Installed burners for heat treatment (stress-relieving, annealing)",
      "Supported forming, coating cure and hydrostatic QA testing",
      "Precise heat control for consistent tank production",
    ],
    tech: ["Industrial Heating", "Heat Treatment", "Fabrication", "Sheet Metal", "QA"],
    thumb: "assets/media/thumbs/1692333906532.jfif",
    video: null, gallery: [], links: [],
  },
  {
    category: "industrial", catLabel: "IoT",
    title: "Smart Home Automation using AI & IoT",
    short: "Home-automation system combining AI and IoT for smart, connected control of the home.",
    meta: "Jan 2021 – Mar 2021 · Bannari Amman Institute of Technology",
    description:
      "An AI + IoT home-automation system for intelligent control and monitoring of home appliances and the living environment.",
    highlights: [
      "IoT-connected appliance control and monitoring",
      "AI-assisted automation logic",
    ],
    tech: ["IoT", "AI", "Embedded", "MQTT"],
    thumb: "assets/media/thumbs/smart-home.jpg",
    video: null, gallery: [], links: [],
  },
  {
    category: "industrial", catLabel: "Hardware · Company",
    title: "Custom Testing Jigs",
    short: "Designed and built custom testing jigs for reliable, repeatable hardware validation.",
    meta: "Company project",
    description:
      "Designed and fabricated custom testing jigs to validate hardware quickly and repeatably across development and production.",
    highlights: [
      "Custom mechanical / electrical jigs for repeatable testing",
      "Faster, more consistent hardware validation",
    ],
    tech: ["Fixture Design", "Electronics Testing", "Fabrication", "QA"],
    thumb: "assets/media/thumbs/testing-jigs.jpg",
    video: null, gallery: [], links: [],
  },
];

/* -------------------------------------------------------------------
   EXPERIENCE & INTERNSHIPS  — newest first.
   type : "work" | "internship" | "education"
------------------------------------------------------------------- */
var TIMELINE = [
  {
    type: "work",
    date: "Jun 2024 — Present",
    role: "Robotics Engineer — Full-Stack Robotics & Autonomous Systems",
    org: "Robolog Automation · Full-time · Dharmapuri, TN (On-site)",
    points: [
      "Build autonomous systems end to end — mechanical, electronics, embedded, ROS/ROS2 autonomy, vision and dashboards.",
      "Developed two EdTech AMRs (full ROS & ROS2 navigation stacks) that helped anchor a ₹1-crore project.",
      "Built NETSCOUT, an autonomous network-scouting robot with a WiFi-analysis turret and 5–10 mm waypoint accuracy.",
    ],
  },
  {
    type: "work",
    date: "Mar 2024 — May 2024",
    role: "Robotics Engineer — R&D (Project-Based, Contract)",
    org: "Bannari Amman Institute of Technology · Sathyamangalam, TN (On-site)",
    points: [
      "Designed & developed an Autonomous Mobile Robot using ROS in an R&D environment for Intec Expo 2024.",
      "Owned the navigation stack, sensor interfacing and real-time control.",
      "Implemented path planning & obstacle avoidance; integrated hardware + software for a reliable live demonstration.",
    ],
  },
  {
    type: "internship",
    date: "Mar 2022 — Apr 2022",
    role: "Robotics Intern",
    org: "Robolog Automation · Internship · Tamil Nadu (On-site)",
    points: [
      "Early hands-on robotics — hardware, electronics and prototyping.",
    ],
  },
  {
    type: "education",
    date: "Oct 2020 — May 2024 · CGPA 8.1",
    role: "B.E. — Electronics & Instrumentation (Robotics & Automation)",
    org: "Bannari Amman Institute of Technology",
    points: [
      "Electronics & Instrumentation, specialising in Instrumentation, Robotics and Automation.",
      "Skills: Node-RED, Mobile Robotics and 13+ more.",
    ],
  },
  {
    type: "education",
    date: "Jun 2018 — Apr 2020 · 63.5%",
    role: "Higher Secondary — Biology & Mathematics",
    org: "Sri Vijay Vidyalaya Matric. Hr. Sec. School",
    points: [],
  },
  {
    type: "education",
    date: "Jun 2009 — Apr 2018 · 87.8%",
    role: "Secondary Education (SSLC)",
    org: "Sri Vijay Vidyalaya Matric. Hr. Sec. School",
    points: [],
  },
];

/* -------------------------------------------------------------------
   ACHIEVEMENTS & RECOGNITION
------------------------------------------------------------------- */
/* Add "img" to any achievement to make its card clickable — the image
   (press clipping, award poster, certificate…) opens in a lightbox.
   Put the files in assets/media/img/ .                                     */
var ACHIEVEMENTS = [
  { icon: "🏆", title: "Winner — KAVACH 2023",
    desc: "National Cybersecurity Hackathon, issued by the Government of India. Team \"Little Champs\" — featured in The Hindu.",
    img: "assets/media/img/1692765537460.jfif", imgLabel: "Featured in The Hindu" },
  { icon: "🥈", title: "2nd Runner-Up — Smart India Hackathon",
    desc: "Smart India Hackathon 2022 — 2nd Runner-Up (₹50,000 prize) for the \"Medical Drone\", @ Bhilai Institute of Technology, Chhattisgarh.",
    img: "assets/media/img/1680329379660.jfif", imgLabel: "View award" },
  { icon: "🎖️", title: "Excellence Award — Flipkart GRID 4.0",
    desc: "Robotics Challenge, issued by Flipkart." },
  { icon: "🌐", title: "National Finalist — Flipkart GRID 5.0",
    desc: "National finalist in the Flipkart GRID 5.0 challenge, organized by Flipkart." },
  { icon: "🚀", title: "Finalist — Hackfest 2023",
    desc: "Finalist at Hackfest 2023, rewarded with an internship offer from Mistral Solutions." },
  { icon: "🏁", title: "23rd Place — Aerathon 2023",
    desc: "Aerathon 2023, organized by the Society of Automotive Engineers (SAE)." },
  { icon: "📄", title: "Journal Publication",
    desc: "T. Vinithkumar, V. Kaviranjani, R. Sivabalakrishnan — \"Design, Fabrication and Control of a Quadruped Robot for Elderly People Assistance\", IRE Journals, Vol. 7, Issue 4, 2023, pp. 238–242." },
  { icon: "📜", title: "Patent — Applied",
    desc: "\"Development and Fabrication of a Six-Axis Articulated Robot for Pick-and-Place Application using a 3D Camera.\"" },
];
