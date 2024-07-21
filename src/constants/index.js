import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  firebase,
  mui,
  nextjs,
  allen,
  iiitn,
  codeclause,
  density,
  resolv,
  cineflix,
  ownlink,
  sgpa,
  contri,
  password,
  noticeboard,
  stockflipr,
  SDE,
  github_profile,
  leetcode,
  codechef,
  linkedin,
  ahead,
  leetcode_contest_maker,
  hiremonk,
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
    title: "MongoDb",
    icon: web,
  },

  {
    title: "Express Js",
    icon: backend,
  },
  {
    title: "React Js",
    icon: mobile,
  },
  {
    title: "Node Js",
    icon: creator,
  },
];

const technologies = [
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
    name: "github",
    icon: github_profile,
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
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "IIT-JEE Coaching",
  //   company_name: "Allen Career Institute",
  //   icon: allen,
  //   iconBg: "#383E56",
  //   date: "June 2019 - May 2020",
  //   points: [
  //     "Kota"
  //   ],
  // },
  {
    title: "B.Tech in Electronics and Communication Engineering",
    company_name: "Indian Institute of Information Technology, Nagpur",
    icon: iiitn,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Jun 2024",
    points: ["Nagpur"],
    location: "",
  },

  {
    title: "Web Developer Intern",
    company_name: "CodeClause",
    icon: codeclause,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Worked on a project to create a web app that allows students to view notices posted by the college and also allows them to post notices. ",
    ],
    location: "Remote",
  },
  {
    title: "Frontend Intern",
    company_name: "Density Exchange",
    icon: density,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Contributed to revamping the trading platform and building the Density Community Website. Used React js and Material UI to develop reusable components",
    ],
    location: "Bengaluru",
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Resolv AI",
    icon: resolv,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Built AI course generation platform from scratch with Next.js and Tailwind CSS. Developed a role-based model throughout the website, ensuring secure access control based on their roles.",
    ],
    location: "Bengaluru",
  },
];

const testimonials = [
  {
    username: "siddhesh1052001",
    company: "Linkedin",
    image: linkedin,
    link: "https://www.linkedin.com/in/siddhesh1052001/",
  },
  {
    username: "siddhesh1051",
    company: "Github",
    image: github_profile,
    link: "https://github.com/siddhesh1051",
  },
  {
    username: "the_cyber_sid",
    company: "Codechef",
    image: codechef,
    link: "https://www.codechef.com/users/the_cyber_sid",
  },
  {
    username: "the_cyber_sid",
    company: "Leetcode",
    image: leetcode,
    link: "https://leetcode.com/the_cyber_sid/",
  },
];

const projects = [
  //project 1

  {
    name: "CineFlix",
    description:
      "Web App that allows users to search for movies and tv shows, view details about each movie or show, and save their favorite movies and tv shows to a watchlist.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: cineflix,
    live_link: "https://cineflix-pro.vercel.app/",
    source_code_link: "https://github.com/siddhesh1051/CineFlix",
  },
  //project 6
  {
    name: "Ownlink",
    description:
      "Ownlink is a cutting-edge web application that revolutionizes the link-in-bio experience across platforms. It's designed to help you consolidate and share multiple links seamlessly.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: ownlink,
    live_link: "https://ownlink.me",
    source_code_link: "https://github.com/siddhesh1051/Ownlink",
  },

  {
    name: "Contri",
    description:
      "Web app that allows users to chat with each other an also split bills among themselves. Made using ReactJs and firebase and razorpay api.",
    tags: [
      {
        name: "reactJs",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "razorpay",
        color: "blue-text-gradient",
      },
    ],
    image: contri,
    live_link: "https://www.contri.tech",
    source_code_link: "https://github.com/siddhesh1051/Contri",
  },

  {
    name: "Ahead App Redesign",
    description:
      "Redesigned the landing page of Ahead App using NextJs and Framer Motion.",
    tags: [
      {
        name: "NextJs",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: ahead,
    live_link: "https://density-exchange-landing-page.vercel.app/",
    source_code_link:
      "https://github.com/siddhesh1051/Density-Exchange-Landing-Page",
  },

  //project 2
  {
    name: "StockFlipr",
    description:
      "Web App that allows users to search for stocks and view details about each stock, and also allows users to see advanced charts of stocks.(This project was made as a part of a Flipr hackathon.)",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: stockflipr,
    live_link: "https://stock-flipr.vercel.app/",
    source_code_link: "https://github.com/siddhesh1051/StockScreener",
  },

  //project`3

  {
    name: "Online Notice Board",
    description:
      "Web App that allows students to view notices posted by the college and also allows them to post notices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: noticeboard,
    live_link: "#work",
    source_code_link:
      "https://github.com/siddhesh1051/CC-JAN-WEB_DEVELOPMENT/tree/main/Task1-Online%20College%20Notice%20Board/online-notice-board",
  },

  //project 4

  {
    name: "Hiremonk",
    description: "Hiring Agency UI made using React Tailwind and framer motion",
    tags: [
      {
        name: "reactJs",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "blue-text-gradient",
      },
    ],
    image: hiremonk,
    live_link: "http://hiremonk.vercel.app/",
    source_code_link: "https://github.com/siddhesh1051/hiring-agency-ui",
  },

  {
    name: "Striver SDE Sheet Tracker",
    description:
      "Web App that allows users to track their progress in Striver SDE Sheet.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextUI",
        color: "green-text-gradient",
      },
    ],
    image: SDE,
    live_link: "https://sde-sheet.vercel.app/",
    source_code_link:
      "https://github.com/siddhesh1051/Striver_sde_sheet_tracker_web_app",
  },

  //project 5

  {
    name: "Leetcode Contest maker (SQL)",
    description:
      "React App and Mysql DB that allow users create leetcode contests and add questions to it.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
    ],
    image: leetcode_contest_maker,
    live_link: "https://leetcodecontestmaker.vercel.app/",
    source_code_link: "https://github.com/siddhesh1051/leetcode-contest-maker",
  },

  // project 6

  // {
  //   name: "Random Password Generator",
  //   description:
  //     "Vanilla Javascript App that allows users to generate random passwords of different lengths and different types and shows strength of generated password.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },

  //   ],
  //   image: password,
  //   live_link: "https://random-password-generator-pro.vercel.app/",
  //   source_code_link: "https://github.com/siddhesh1051/SGPA-Calculator",
  // },
];

export { services, technologies, experiences, testimonials, projects };
