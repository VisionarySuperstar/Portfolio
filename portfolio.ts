import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Lucas Lee",
  title: "Hi all, I'm Lucas",
  description:
    "Fullstack Blockchain developer specializing in Solidity and Ethereum. Crafting innovative smart contracts for DeFi, NFTs and more. Eager to build the decentralized future.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "Superstar-Lucas",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "lucaslee971127@gmail.com",
  linkedin: "https://www.linkedin.com/in/lucas-lee971127/",
  github: "https://github.com/Superstar-Lucas",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK BLOCKCHAIN DEVELOPER WHO WANTS TO EXPLORE EVERY CRYPTO WORLD",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Crafted smart contracts and DAPPs across various EVM Blockchain platforms including Ethereum, BSC, Polygon, and Blast"),
        emoji("⚡ Proficient in Web3 technologies and frameworks such as Web3.js, Ethers.js, and interfacing with decentralized networks and protocols."),
        emoji("⚡ Experienced in project development within several crypto ecosystems such as DeFi, P2E, NFT, and DAO."),
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          iconifyTag: "logos:solidity",
        },
        {
          skillName: "Typescript",
          iconifyTag: "nonicons:typescript-16",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Web3js",
          iconifyTag: "devicon:web3",
        },
        {
          skillName: "Etherjs",
          iconifyTag: "fa6-brands:ethereum",
        },
        {
          skillName: "Rust",
          iconifyTag: "cib:rust",
        },
        {
          skillName: "Golang",
          iconifyTag: "fa6-brands:golang",
        },
        {
          skillName: "Solana",
          iconifyTag: "token-branded:solana",
        },
        {
          skillName: "Hardhat",
          iconifyTag: "devicon:hardhat",
        },
        {
          skillName: "Foundry",
          iconifyTag: "simple-icons:foundryvirtualtabletop",
        },
        {
          skillName: "Ruby on Rails",
          iconifyTag: "simple-icons:rubyonrails",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "skill-icons:expressjs-light",
        },
        {
          skillName: "Graphql",
          iconifyTag: "simple-icons:graphql",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "simple-icons:postgresql",
        },
        {
          skillName: "Apollo",
          iconifyTag: "file-icons:apollo",
        },
        {
          skillName: "Redis",
          iconifyTag: "cib:redis",
        },
        {
          skillName: "AWS",
          iconifyTag: "skill-icons:aws-light",
        },
        {
          skillName: "Jira",
          iconifyTag: "simple-icons:jira",
        },
        {
          skillName: "Git",
          iconifyTag: "cib:git",
        },
        {
          skillName: "Devops",
          iconifyTag: "cib:azure-devops",
        },
        {
          skillName: "Prisma",
          iconifyTag: "simple-icons:prisma",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Gitlab",
          iconifyTag: "logos:gitlab",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Smart Contract", //Insert stack or technology you have experience in
    progressPercentage: "98", //Insert relative proficiency in percentage
  },
  {
    Stack: "Web3",
    progressPercentage: "90",
  },
  {
    Stack: "TheGraph",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Singapore Instituion of Technology",
    subHeader: "Bachelor of  Computer Science",
    duration: "September 2013 - April 2017",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Fullstack Blockchain Developer",
    company: "FKRPRO",
    companyLogo: "/img/icons/common/FKRPRO.png",
    date: "DEC 2022 - MAR 2024",
    desc: "FKRPRO is a pioneering blockchain venture leveraging the Polygon network. Spearheaded a joint initiative with product and development teams, enhancing platform efficiency by 20%. Engaged in over 10 open source community projects, liaised with stakeholders, and provided mentorship and guidance to 3 emerging junior developers. Enhanced to engineering a robust backend infrastructure pivotal for the convergence of Web3 and FinTech.",
  },
  {
    role: "Full Stack Developer",
    company: "1PayrLink",
    companyLogo: "/img/icons/common/PayrLink.jpg",
    date: "DEC 2019 - NOV 2022",
    desc: "Researched the requirements for a smart contract to be used in a cryptocurrency escrow project. Crafted the smart contract design for the escrow project, encompassing various functions and modules using UML diagrams. Implemented each stage of the ICO using Solidity and the Truffle framework to enhance project quality and accelerate development. Engaged in a collaborative effort with the Frontend and Web3 teams to optimize the efficiency of project development.",
  },
  {
    role: "Web Developer",
    company: "Wizardsdev",
    companyLogo: "/img/icons/common/wizardsdev.png",
    date: "OCT 2017 - DEC 2019",
    desc: "WizardsDev is part of a large international holding company. It has offices in Boston, Tel Aviv, Baku, Dnepr, Kyiv, Kharkov, and other major cities. Implemented websites, mobile applications, and landing pages from concept through deployment. Conducted comprehensive assessments of UX and UI designs to ascertain technical feasibility, thereby optimizing the overall user experience and interface functionality. Enhanced on-chain data processing efficiency by a remarkable 12% through strategic deployment of optimized smart contract functions and implementing robust persistence storage strategies.",
  },
  
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Fullstack Blockchain Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a fullstack developer.",
    github: "https://github.com/Superstar-Lucas",
    link: "https://developer-portfolio-superstar-lucas.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Daniel Shapero",
    role: "CEO at FKRPRO",
    feedback:
      "You were a wonderful addition to our team, Lucas. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so.",
  },
  {
    name: "Blake Lin",
    role: "CIO at PayrLink",
    feedback:
      "Lucas has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Lucas is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Lucas for any Full Stack Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Vadym Gontsov",
    role: "CEO at Wizardsdev",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Lucas Lee",
  description: greetings.description,
  author: "Lucas Lee",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4https://avatars.githubusercontent.com/u/9166113?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
