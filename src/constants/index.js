import {
    javascript,
    html,
    css,
    wordpress,
    application,
    mongodb,
    reactjs,
    redux,
    namratha,
    mlgcorporate,
    tailwind,
    working,
    nodejs,
    git,
    mlt,
    reactdev,
    js,
    accenture, 
    portfolio,
    threejs,
    hostinger,
    mysql,
    github,
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
      title: "React Developer",
      icon: reactdev,
    },
    {
      title: "Graphic Designer",
      icon: application,
    },
    {
      title: "Backend Developer",
      icon: js,
    },
    {
      title: "Wordpress Developer",
      icon: wordpress,
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
      name: "github",
      icon: github,
    },
    {
      name: "hostinger",
      icon: hostinger,
    },
    {
      name: "mysql",
      icon: mysql,
    }
  ];
  
  const experiences = [
    {
      title: "Service Desk Engineer",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#383E56",
      date: "August 2022 - January 2023",
      points: [
        "Troubleshooting issues faced by clients for proper issue description.",
        "Managing Server rooms for patch and server up[dates",
        "Hardware and software support during project productions.",
        "System reimaging and data wipe for data security.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "MLT Corporate Solutions",
      icon: mlt,
      iconBg: "#383E56",
      date: "March 2022 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  

  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Hostinger",
          color: "pink-text-gradient",
        },
      ],
      image: mlgcorporate,
      source_code_link: "https://www.mlgcorporate.in/",
    },
    {
      name: "Business Website",
      description:
        "Developed the 'Namratha Handlooms' website to showcase handloom artworks, featuring a user-friendly interface and contact forms for visitor engagement.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Hostinger-Wordpress-Builder",
          color: "green-text-gradient",
        },
        
      ],
      image: namratha,
      source_code_link: "https://lavenderblush-dove-342971.hostingersite.com/",
    },
    // {
    //   name: "Portfolio Website",
    //   description:
    //     "Built an engaging portfolio website using React and Three.js, featuring interactive 3D elements and a sleek design to dynamically showcase projects and skills.",
    //   tags: [
    //     {
    //       name: "reactjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Threejs",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: portfolio,
    //   source_code_link: "https://kalash-portfolio-nine.vercel.app/",
    // },
    {
      name: "ECommerce Website",
      description:
        "Developed a dynamic eCommerce website using MERN Stack, incorporating a user-friendly interface to enhance the shopping experience.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: working,
      source_code_link: "https://kalash-portfolio-nine.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };
