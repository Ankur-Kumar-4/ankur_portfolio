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
  carrent,
  jobit,
  tripguide,
  bootstrap,
  ps,
  cryptoTracker,
  airBnbClone,
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
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Paradise Moms",
    icon: ps,
    iconBg: "#383E56",
    date: "January 2024 - currently working",
    points: [
      "Collaborated with a senior developer with over 5 years of experience, gaining valuable mentorship and insight.",
      "Interacted directly with clients to gather requirements and feedback, ensuring their needs were met effectively.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Designed the entire application from scratch, utilizing a modern frontend hybrid architecture that supports both client-side rendering (CSR) and server-side rendering (SSR), and gained experience with backend technologies like Nest.js.",
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
