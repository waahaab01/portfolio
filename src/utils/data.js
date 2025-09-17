// src/constants/skills.js

import jsIcon from "../assets/images/icons/js.png";
import reactIcon from "../assets/images/icons/react.png";
import nextIcon from "../assets/images/icons/next.png";
import reduxIcon from "../assets/images/icons/redux.png";
import tailwindIcon from "../assets/images/icons/tailwind.png";
import nodeIcon from "../assets/images/icons/node.png";
import expressIcon from "../assets/images/icons/express.png";
import mongoIcon from "../assets/images/icons/mongo.png";
import MySQLIcon from "../assets/images/icons/mysql.png";
import framerIcon from "../assets/images/icons/framer.png";
import scssIcon from "../assets/images/icons/scss.png";
import gitIcon from "../assets/images/icons/git.png";
import githubIcon from "../assets/images/icons/github.png";
import MuiIcon from "../assets/images/icons/mui.png";
import andtIcon from "../assets/images/icons/antd.png";
import netlifyIcon from "../assets/images/icons/nelify.png";

import project1Img from "../assets/images/p2.png";
import project2Img from "../assets/images/p3.png";
import project3Img from "../assets/images/p4.png";


export const skills = [
  { name: "JavaScript", icon: jsIcon, color: "border-yellow-400" },
  { name: "React JS", icon: reactIcon, color: "border-cyan-400" },
  { name: "Next.js", icon: nextIcon, color: "border-gray-400" },
  { name: "Redux", icon: reduxIcon, color: "border-purple-500" },
  { name: "Tailwind CSS", icon: tailwindIcon, color: "border-sky-400" },
  { name: "Node JS", icon: nodeIcon, color: "border-green-500" },
  { name: "Express JS", icon: expressIcon, color: "border-gray-500" },
  { name: "MongoDB", icon: mongoIcon, color: "border-green-400" },
  { name: "MySQl", icon: MySQLIcon, color: "border-blue-400" },
  { name: "Framer Motion", icon: framerIcon, color: "border-red-500" },
  { name: "Scss", icon: scssIcon, color: "border-sky-300" },
  { name: "Git", icon: gitIcon, color: "border-orange-500" },
  { name: "GitHub", icon: githubIcon, color: "border-gray-700" },
  { name: "Material UI", icon: MuiIcon, color: "border-pink-400" },
  { name: "Ant Design", icon: andtIcon, color: "border-indigo-400" },
  { name: "Netlify", icon: netlifyIcon, color: "border-purple-400" },
];


export const experiences = [
  {
    title: "Certified Web Designer & Developer",
    place: "UET (University of Education and Technology)",
    duration: "Jan 2021 - Mar 2021",
    description:
      "Completed a 3-month certification covering the fundamentals of web design and development, gaining a strong foundation in HTML, CSS, and basic JavaScript.",
  },
  {
    title: "Freelancer (Vanilla JS Projects)",
    place: "Remote",
    duration: "2022",
    description:
      "Built small-scale practice projects using Vanilla JavaScript for freelance clients, applying core web development principles in real-world use cases.",
  },
  {
    title: "Trainee Developer",
    place: "NanoBit World",
    duration: "Jan 2023 - Jun 2023",
    description:
      "Worked on real-time projects and learned modern technologies and industry best practices under professional mentorship.",
  },
  {
    title: "React.js Intern",
    place: "NanoBit World",
    duration: "Jul 2023 - Dec 2023",
    description:
      "Focused on JavaScript frameworks, especially React.js, building and implementing real-world projects with reusable components and state management.",
  },
  {
    title: "React.js Developer",
    place: "NanoBit World",
    duration: "Jan 2024 - Jun 2025",
    description:
      "Contributed to production-grade React.js projects for 1.5 years, implementing complex UI features and optimizing performance.",
  },
  {
    title: "MERN Stack Developer",
    place: "NanoBit World",
    duration: "Jul 2025 - Present",
    description:
      "Promoted to MERN Stack Developer, handling full-stack real-time projects across multiple domains using MongoDB, Express.js, React.js, and Node.js.",
  },
];

export const projects = [
  {
    id: 1,
    name: "The Fantasy League of HipHop - theflohh",
    image: project1Img,
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    description:
      "A full-stack AI Image Generator app where users can generate unique images using prompts powered by AI APIs. Includes authentication and gallery features.",
    liveLink: "https://theflohh.com/",
  },
  {
    id: 2,
    name: "Pre Construction Estimation",
    image: project2Img,
    tech: ["React.js", "CSS3", "Redux", "Node.js", "MongoDB" , "express.js"],
    description:
      "A modern e-commerce web application with authentication, product filters, and a fully functional shopping cart system.",
    liveLink: "https://preconstructionestimation.com/",
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: project3Img,
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    description:
      "A personal portfolio website with smooth animations, dark mode support, and a clean modern layout showcasing projects and skills.",
    liveLink: "https://your-portfolio.netlify.app",
  }
];