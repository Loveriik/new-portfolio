import { FaGithub, FaLinkedin } from "react-icons/fa6";

import project1 from "../assets/projects/e-commerce.png";
import project2 from "../assets/projects/quiz2.png";
import project3 from "../assets/projects/wheel.png";
import project4 from "../assets/projects/flipCards.png";
import project5 from "../assets/projects/goose.png";

import javascript from "../assets/skills/javascript.svg";
import css from "../assets/skills/css.svg";
import html from "../assets/skills/html5.svg";
import react from "../assets/skills/react.svg";
import redux from "../assets/skills/redux.svg";
import typescript from "../assets/skills/typescript.svg";
import next from "../assets/skills/nextjs.svg";
import sass from "../assets/skills/sass.svg";
import tailwind from "../assets/skills/tailwind.svg";
import node from "../assets/skills/nodejs.svg";

export const LINKS = [
  { id: "skills", name: "skills" },
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const SKILLS = [
  {
    id: 1,
    title: "JavaScript",
    src: javascript,
  },
  {
    id: 2,
    title: "CSS",
    src: css,
  },
  {
    id: 3,
    title: "HTML",
    src: html,
  },
  {
    id: 4,
    title: "React",
    src: react,
  },
  {
    id: 5,
    title: "Redux",
    src: redux,
  },
  {
    id: 6,
    title: "TypeScript",
    src: typescript,
  },
  {
    id: 7,
    title: "Nextjs",
    src: next,
  },
  {
    id: 8,
    title: "SASS",
    src: sass,
  },
  {
    id: 9,
    title: "Tailwind",
    src: tailwind,
  },
  {
    id: 10,
    title: "NodeJs",
    src: node,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce shop page built with React and Redux.",
    imgSrc: project1,
    link: "https://loveriik.github.io/cake-shop/",
  },
  {
    id: 2,
    title: "Quiz game",
    description:
      "An interactive quiz game project created using TypeScript and the Framer Motion React library.",
    imgSrc: project2,
    link: "https://loveriik.github.io/Quiz-game/",
  },
  {
    id: 3,
    title: "Wheel of fortune",
    description:
      "Game development projects inspired by an interest in creating interactive games.",
    imgSrc: project3,
    link: "https://loveriik.github.io/Wheel-of-fortune/",
  },
  {
    id: 4,
    title: "Flip cards",
    description:
      "Game development projects inspired by an interest in creating interactive games.",
    imgSrc: project4,
    link: "https://loveriik.github.io/Flip-cards/",
  },
  {
    id: 5,
    title: "Goose landing",
    description: "Modern and responsive landing",
    imgSrc: project5,
    link: "https://loveriik.github.io/Goose-landing/",
  },
];

export const ABOUT =
  "With two years of dedicated self-study and hands-on project experience, I have developed a solid foundation in front-end technologies and a strong passion for web development. My journey has equipped me with skills in HTML, CSS, JavaScript, TypeScript, Redux, and frameworks like React and Next.js. I specialize in creating dynamic and responsive web applications that provide seamless user experiences. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "AndersenLab",
    role: "Internership",
    year: "Dec 23 - Jan 24",
    description:
      "Acquired a solid foundation in Java programming, focusing on fundamental concepts and syntax. Designed and developed reusable and modular code through class and object creation. Integrated Java applications with MySQL databases using JDBC to perform CRUD operations. Created a fully functional pizza shop web page featuring user authentication, products listing and order management.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    year: "Apr 23 - Oct 23",
    description:
      "Developed simple landing pages and single-page applications for the Georgian clients.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Loveriik",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/aleksandr-lavrov/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "sancho2140@gmail.com",
  phone: "+371 253 240 63",
};
