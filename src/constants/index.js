import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  itstep,
  js_mastery,
  nfu,
  hoobank,
  restaurant,
  nfu_,
  mysun,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "IT Step Academy (Prague, Czech Republic)",
    icon: itstep,
    iconBg: "#383E56",
    date: "October 2021 - February 2022",
    points: [
      "Developing websites using HTML, CSS, Bootstrap, JavaScript, jQuery and other related technologies.",
      "While studying the program of the Front-end course implemented responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "JS Mastery",
    icon: js_mastery,
    iconBg: "#383E56",
    date: "September 2022 - March 2023",
    points: [
      "Developing websites using React.js and Tailwind CSS technologies.",
      "While studying the program of the JS Mastery video courses implemented responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NFU Ukraine",
    icon: nfu,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining website using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "NFU Ukraine",
  //   icon: nfu,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Taras proved me wrong.",
    name: "Marta Vavzhyniak",
    designation: "SEO",
    company: "Žabka ('TESCO')",
    image: mysun,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Taras does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Taras optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HooBank ",
    course_description:
      "(JS Mastery courses)",
    description:
      "Modern UI/UX website template using React.js & Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/ishchuktaras/bank_modern_app",
  },
  {
    name: "Geriht Restaurant",
    course_description:
      "(JS Mastery courses)",
    description:
      "Modern UI/UX Restaurant Landing Page Website template",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS BEM Model",
        color: "green-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/ishchuktaras/gerich-restaurant-master",
  },
  {
    name: "NFU Ukraine",
    description:
      "Modern art through history. Web site represents the modern art of Ukrainian artists during the resistance of the Ukrainian people against the aggression of the Russian Federation",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nfu_,
    source_code_link: "https://www.nfuua.space/",
  },
];

export { services, technologies, experiences, testimonials, projects };