// this is where the whole content of the application will be
// services, techonologies, experiences, testimonials, projects
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs, 
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  crowdnav,
  feelin,
  carrent,
  jobit,
  tripguide,
  threejs,
  upper_bound,
  amii,
  uofa,
  uasu,
  trinity,
  drivesafe,
  pm,
  mckins
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Technical Educator",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Engineer Intern",
    company_name: "PMASSISTANT.AI",
    icon: pm,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Built & shipped interactive React + FastAPI modules for AI project-management platform, turning live meeting transcripts into real-time summaries and action items and integrating with Google Workspace.",
      "Ran iterative evaluation studies on multiple generative-AI models (GPT-4o & open-source LLMs), improving action-item extraction precision by 18% and presenting findings to PMs, designers, and execs to drive model-selection decisions for the public beta.",
      "Refactored backend for scalability - async I/O, caching, and a GitHub-Act ions CI/CD pipeline which cut API latency by 40%.",
    ],
  },
  {
    title: "Lead Forward Program",
    company_name: "McKinsey & Company",
    icon: mckins,
    iconBg: "#ffffff",
    date: "Apr 2025 - Jun 2025",
    points: [
      "Structured problem-solving: Trained in McKinsey’s hypothesis-driven, MECE approach to break down ambiguous tech issues into testable sub-problems and prioritize fixes efficiently.",
      "Persuasive technical communication: Completed the Communicating for Impact module, sharpening the ability to translate complex analyses into concise narratives and visuals that move diverse stakeholders to action.",
      "Digital fluency & adaptability: Built a personalized “My Digital Toolkit,” gaining confidence in selecting emerging software tools, automating routine workflows, and collaborating effectively across a global, virtual cohort.",
    ],
  },
  {
    title: "Volunteer",
    company_name: "Upper Bound AI Conference",
    icon: upper_bound,
    iconBg: "#383E56",
    date: "May 20, 2025 - May 23, 2025",
    points: [
      "Volunteered at the event — helped organize, guide, or support attendees, which gave you a behind-the-scenes look.",
      "Spoke with Dr. Richard Sutton, pioneer in Reinforcement Learning — gained valuable perspective on lifelong learning in AI.",
      "Engaged with researchers, recruiters, and community builders from Amii and beyond.",
      "Built connections with students and early-career professionals interested in the same space.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "University of Alberta",
    icon: uofa,
    iconBg: "#383E56",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Led lab sessions and office hours for over 100+ students, addressing questions and providing targeted assistance, leading to a 60% improvement in average lab scores.",
      "Streamlined grading processes by creating automated scripts in Python, Bash and PyTest, reducing grading time by 35% and improving overall consistency and fairness.",
      "Developed engaging learning materials, including interactive tutorials and quizzes, which enhanced student understanding and led to a 20% increase in engagement with difficult course topics.",
    ],
  },
  {
    title: "Academic Tutor",
    company_name: "University of Alberta Students' Union",
    icon: uasu,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Delivered clear, personalized academic support by breaking down complex concepts for diverse learners.",
      "Adapted tutoring methods to suit individual learning styles and academic needs.",
      "Created a welcoming and inclusive environment that encouraged student confidence and participation.",
      "Communicated effectively and patiently to help students build problem-solving and critical thinking skills.",
    ],
  },
  {
    title: "Piano Tutor",
    company_name: "Freelance",
    icon: trinity,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Taught piano to students of varying skill levels, focusing on technique, musicality, and theory.",
      "Adapted lesson plans to match individual learning styles, pace, and musical goals.",
      "Encouraged consistent practice and progress through positive reinforcement and clear guidance.",
      "Helped students prepare for performances, exams, and personal milestones with confidence and skill.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CrowdNav",
    description:
      "Real-time crowd movement analysis: Uses image processing techniques to detect crowd density and movement patterns. Weighted image map generation: Converts live recordings into a heatmap representing crowd density. Optimal pathfinding: Implements Dijkstra's algorithm to compute the shortest and least crowded path from point A to point B. User-friendly input: Simply provide a live recording and select two points to generate a safe and efficient route.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
      {
        name: "HackED 2025",
        color: "yellow-text-gradient",
      },
    ],
    image: crowdnav,
    source_code_link: "https://devpost.com/software/crowdnav",
  },
  {
    name: "DriveSafe",
    description:
      "DriveSafe is an AI-powered application that combats driver fatigue by analyzing EEG data and facial cues in real time. Built with React and Flask, it uses neurotechnology and computer vision to detect drowsiness and deliver instant voice alerts. By combining live monitoring with weather data and trend analysis, DriveSafe helps drivers stay alert and safe on the road.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "natHACKS 2024",
        color: "yellow-text-gradient",
      },
    ],
    image: drivesafe,
    source_code_link: "https://devpost.com/software/nathacks",
  },
  {
    name: "Feelin'",
    description:
      "This Android application allows users to log, track, and share their moods. Users can record mood events with details like emotional state, triggers, and social context. The app provides features for viewing, editing, and filtering mood history, as well as following other users’ mood updates.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "android studio",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "CMPUT 301",
        color: "yellow-text-gradient",
      },
    ],
    image: feelin,
    source_code_link: "https://github.com/cmput301-w25/project-donotredeem",
  },
];

export { services, technologies, experiences, testimonials, projects };
