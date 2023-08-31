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
  hungry,
  dental,
  shopzon,
  book,
  firebase,
  docker1,
  weero,
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
    id: "skill",
    title: "Skill",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "MERN stack Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    name: "Three JS",
    icon: firebase,
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
  {
    name: "docker1",
    icon: docker1,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Weero Digital",
    icon: weero,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Weero Digital",
    icon: weero,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Weero Digital",
    icon: weero,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Developed and maintained web applications using the MERN (MongoDB, Express, React,Node.js) stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Weero Digital",
    icon: weero,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Book-Catalog",
    description:
      "Web-based platform that allows users to buy, and manage book. Users can buy their preferable book and and also can add book. To buy and add book user have to log in first.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "RTK Query",
        color: "green-text-gradient",
      },
      {
        name: "mongoose",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
     
    ],
    image: book,
    source_code_link:
      "https://github.com/rifatahmed787/book-catalog-client",
    live_link: "https://book-catalog-client-alpha.vercel.app/",
  },
  {
    name: "Hungry-Guest",
    description:
      "Web-based platform that allows users to buy, and manage products. Users can buy their daily basis products. To buy products user have to log in first.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "typeScript",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hungry,
    source_code_link:
      "https://github.com/rifatahmed787/hungry-guest-typescript-client",
    live_link: "https://hungry-guest.netlify.app/",
  },
  {
    name: "Weero-Dental",
    description:
      "Web-based platform that allows users to buy, and manage products. Users can buy their daily basis products. To buy products user have to log in first.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dental,
    source_code_link:
      "https://github.com/rifatahmed787/fresh-breath-dental-client",
    live_link: "https://weero-dental.netlify.app/",
  },
  {
    name: "ShopZon",
    description:
      "Web-based platform that allows users to buy, and manage products. Users can buy their daily basis products. To buy products user have to log in first.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-redux",
        color: "blue-text-gradient",
      },
      {
        name: "RTK Query",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopzon,
    source_code_link:
      "https://github.com/rifatahmed787/redux-toolkit-ema-john-client",
    live_link: "https://ema-john-79c53.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
