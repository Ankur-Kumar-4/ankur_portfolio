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
  bootstrap,
  ps,
  cryptoTracker,
  airBnbClone,
  threejs,
  nextjs,
  groomingBrothers,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Open Source Contributer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
];

const experiences = [
  // {
  //   title: "Web Developer (internship)",
  //   company_name: "Grooming Brothers",
  //   icon: groomingBrothers,
  //   iconBg: "#383E56",
  //   date: "july 2024 - september 2024",
  //   points: [
  //     "Managed and maintained the e-commerce site codebase, ensuring 99.9% uptime and optimal site performance.",
  //     "Enhanced user experience by optimizing existing features and developing new functionalities that led to a 15% increase in user engagement.",
  //   ],
  // },
  {
    title: "Full Stack Developer",
    company_name: "Paradise Moms",
    icon: ps,
    iconBg: "#383E56",
    date: "January 2024 - july 2024",
    points: [
      "Partnered with a senior developer (5+ years experience) to gain valuable mentorship and deep insights into best practices and advanced development techniques.",
      "Engaged directly with clients to gather requirements and feedback, ensuring 100% alignment with their needs and improving overall client satisfaction",
      "Architected a full-scale application from scratch using a modern frontend hybrid architecture (CSR + SSR), and gained hands-on experience with backend technologies like Nest.js, contributing to a seamless user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Ritu Singh",
    designation: "Founder",
    company: "Paradise moms",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Aditya Kumar",
    designation: "SDE",
    company: "Proximity",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Crypto Tracker",
    description:
      "A real-time tracking tool for various cryptocurrencies, offering detailed analysis of market cap, price, and volume. Users can compare different cryptocurrencies and maintain a customizable watchlist for easy monitoring.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },

      {
        name: "Chart.js",
        color: "green-text-gradient",
      },
    ],
    image: cryptoTracker,
    source_code_link: "https://github.com/Ankur-Kumar-4/cryptoTracker",
    deploy_link: "https://cryptotracker-ankur.netlify.app/",
  },
  {
    name: "Air bnb clone",
    description:
      "A comprehensive application that allows users to search for hotels based on location, check-in and check-out dates, and the number of guests. This clone provides a seamless experience for viewing available accommodations in the desired area.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },

      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: airBnbClone,
    source_code_link: "https://github.com/Ankur-Kumar-4/Airbndb_clone",
    deploy_link: "https://ankur-kumar-4.github.io/Airbndb_clone/",
  },
];

export { services, technologies, experiences, testimonials, projects };
