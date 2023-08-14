export const employers: Employer[] = [
  {
    name: "Available",
    title: "Available",
    dateStart: "Present",
    dateEnd: "Present",
    navYear: "Hire Me",
    description: "",
    logo: "",
    experience: [
      "Available for full time work. References Available.  Send me an email!",
    ],
  },
  {
    name: "Spot",
    title: "Lead Software Engineer",
    dateStart: "04/2022",
    dateEnd: "08/2022",
    navYear: "2022",
    description: "",
    logo: "/images/spot.png",
    link: "https://www.getspot.com/",
    tech: ["Nest.js", "C#", "Kafka"],
    experience: [
      "Led the integration departments transition to an event-driven architecture, and rapidly prototyped solutions.",
      "Implemented a forward chaining rule engine to streamline and optimize multiple disparate rulesets.",
      "Collaborated on a Tech Council of the most senior engineers to shape the company's technology strategy and roadmap.",
    ],
  },
  {
    name: "Olive AI",
    title: "Lead Software Engineer",
    dateStart: "06/2020",
    dateEnd: "04/2022",
    navYear: "2022",
    description: "",
    logo: "/images/olive.webp",
    link: "https://oliveai.com/",
    tech: ["Node.js", "Selenium", "OpenCV", "AWS"],
    experience: [
      "Hired, mentored and coached a team of software developers. Led daily scrum activities.",
      "Collaborated closely with healthcare partners to rapidly architect time-sensitive process automations.",
      "Utilized Node, AWS, and a suite of libraries such as OpenCV and Puppeteer to develop automated processes for my customers.",
      "Created automation to reduce COVID testing time by 86% and automated COVID Vaccine scheduling and analysis",
      "Automated supply chain purchase order dispatching and confirmations, and scheduling on legacy systems",
    ],
  },
  {
    name: "Innovate Softworks",
    title: "Software Engineer",
    dateStart: "08/2018",
    dateEnd: "06/2020",
    navYear: "2020",
    description: "",
    logo: "/images/softworks.webp",
    link: "https://innovatesoftworks.com/",
    tech: ["Electron", "React", "Node.js", "MSSQL", "C#"],
    experience: [
      "Partnered with industrial and health care clients to develop solutions for onsite, locally managed software.",
      "Worked with legacy applications, refactoring and updating for modern Windows APIs.",
      "Built full stack applications in C#, Node, React and Electron to generate and download firmware for industrial machines.",
      "Worked with a fully distributed, agile team of contracted junior developers.",
    ],
  },
  {
    name: "Liberty Mutual",
    title: "Software Engineer II",
    dateStart: "01/2016",
    dateEnd: "08/2018",
    navYear: "2018",
    description: "",
    logo: "/images/liberty.avif",
    link: "https://www.libertymutual.com/",
    tech: ["React", "Node.js", "MongoDB", "Java", "C#"],
    experience: [
      "Developed innovative insurance products in new markets such as Nest Protect, RightTrack, HighwayHero, Auto OEM Telematics Programs.",
      "Created or maintained numerous internal and public REST and SOAP APIs in Node, Java, and MongoDB, focusing on reducing quoting time and increasing user retention.",
      "Lead a small team to create an API automating a search for existing discounts previously available to a customer.",
      "Maintained and migrated C# and Java legacy on-premises services to Cloud Foundry, AWS.",
    ],
  },
];

export interface Employer {
  name: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  description?: string;
  logo?: string;
  link?: string;
  tech?: string[];
  navYear?: string;
  experience?: string[];
}

export const organizations: Organization[] = [
  {
    name: "ACM@SIU",
    title: "President",
    dateStart: "08/2013",
    dateEnd: "12/2015",
    description: "",
    logo: "",
    link: "https://github.com/siucacm",
  },
  {
    name: "SalukiLAN",
    title: "Director",
    dateStart: "2013",
    dateEnd: "2015",
    description:
      "A Charity LAN party at Southern Illinois University, raising money for the Childs Play Charity.",
    logo: "",
    link: "https://www.facebook.com/SalukiLAN/",
  },
  {
    name: "OpenSpace",
    title: "Director",
    dateStart: "01/2014",
    dateEnd: "01/2015",
    description: "A local hackerspace open to the public in Murphysboro, IL.",
    logo: "",
    link: "https://thesouthern.com/news/local/openspaces-demonstrates-use-of-new-creative-space/article_7ef33585-62e9-5639-9875-569711bb28a9.html",
  },
  {
    name: "HackSI",
    title: "Volunteer",
    dateStart: "2013",
    dateEnd: "2014",
    description: "A hackathon in Southern Illinois.",
    logo: "",
    link: "https://hacksi.org/",
  },
  {
    name: "Mercs",
    title: "Commander",
    dateStart: "08/2010",
    dateEnd: "Present",
    description: "",
    logo: "",
    link: "https://mercsclan.com/",
  },
  {
    name: "Operation Code",
    title: "Member",
    dateStart: "2016",
    dateEnd: "Present",
    description: "",
    logo: "",
    link: "https://operationcode.org/",
  },
];

export interface Organization {
  name: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  description?: string;
  logo?: string;
  link?: string;
}

export const educationParagraphs = [
  `I have a Bachelor in Computer Science from Southern Illinois University, and a Certificate from Mchenry County College while participating in their Dual Enrollment Program in High School.`,
  `During my time at SIU I was President of the Association for Computing Machinery student chapter, 
  led new students as a Salukli Peer Mentor and a New Student Orientation Leader.`,
  `I also organized and ran SalukiLAN, an annual charity LAN party that raised money for the Childs Play Charity, hosting over 500 people.`,
];

export const education: Education[] = [
  {
    name: "Southern Illinois University",
    appreviation: "SIU",
    degree: "Bachelors of Computer Science",
    minor: ["Aviation Flight", "Electrical Engineering"],
    courses: [
      "Web Applications",
      "Databases",
      "Linux and C",
      "Data Structures",
      "CS Ethics",
    ],
    dateStart: "08/2012",
    dateEnd: "12/2015",
    description: "",
    logo: "/images/saluki.png",
    link: "https://siu.edu/",
    color1: "#720000",
    color2: "#720000",
  },
  {
    name: "Mchenry County College",
    appreviation: "MCC",
    courses: ["2D Animation", "C++", "Game Programming"],
    degree: "Certificate of Internet Programming",
    dateStart: "08/2008",
    dateEnd: "08/2010",
    description: "",
    logo: "/images/mcc.png",
    link: "https://www.mchenry.edu/",
    color1: "#4b3190",
    color2: "#fdbb30",
  },
];

export interface Education {
  name: string;
  appreviation?: string;
  degree: string;
  minor?: string | string[];
  courses?: string[];
  dateStart: string;
  dateEnd: string;
  description?: string;
  logo?: string;
  link?: string;
  color1?: string;
  color2?: string;
}

export interface Tech {
  name: string;
  icon: string;
}

export const TechList = [
  {
    name: "React",
    icon: "/icons/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss-plain.svg",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb-original.svg",
  },
  {
    name: "Express",
    icon: "/icons/express-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql-original.svg",
  },
  {
    name: "Vercel",
    icon: "/icons/vercel.svg",
  },
  {
    name: "AWS",
    icon: "/icons/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Discord.js",
    icon: "/icons/discordjs-original.svg",
  },
  {
    name: "Kafka",
    icon: "/icons/apachekafka-original.svg",
  },
  {
    name: "Redis",
    icon: "/icons/redis-original.svg",
  },
  {
    name: "Planetscale",
    icon: "/icons/planetscale.svg",
  },
  {
    name: "DotNet Core",
    icon: "/icons/dotnetcore-original.svg",
  },
  {
    name: "Electron",
    icon: "/icons/electron-original.svg",
  },
  {
    name: "Github",
    icon: "/icons/github-original.svg",
  },
  {
    name: "Three.js",
    icon: "/icons/threejs-original.svg",
  },
  {
    name: "Typescript",
    icon: "/icons/typescript-original.svg",
  },
  {
    name: "Javascript",
    icon: "/icons/javascript-original.svg",
  },
  {
    name: "Selenium",
    icon: "/icons/selenium-original.svg",
  },
  {
    name: "VS Code",
    icon: "/icons/vscode-original.svg",
  },
  {
    name: "NPM",
    icon: "/icons/npm-original-wordmark.svg",
  },
  {
    name: "OpenAI",
    icon: "/icons/openai-original.svg",
  },
  {
    name: "Redux",
    icon: "/icons/redux-original.svg",
  },
  {
    name: "OpenCV",
    icon: "/icons/opencv-original.svg",
  },
  {
    name: "Mocha",
    icon: "/icons/mocha-plain.svg",
  },
  {
    name: "Nest.js",
    icon: "/icons/nestjs-plain.svg",
  },
  {
    name: "C#",
    icon: "/icons/csharp-original.svg",
  },
  {
    name: "MSSQL",
    icon: "/icons/microsoftsqlserver-plain.svg",
  },
  {
    name: "Stripe",
    icon: "/icons/stripe.svg",
  },
  {
    name: "Java",
    icon: "/icons/java-original.svg",
  },
  {
    name: "Drizzle",
    icon: "/icons/drizzle.svg",
  },
];

export const aboutMeParagraphs = [
  ` I’m a full stack developer and team leader with 8 years of
    experience. A Javascript dominate polyglot, I believe in choosing
            the right tools for the job.
            `,
  ` I develop practical and maintainable software. Collaborate
            closely with my business partners, product owners and other
            stakeholders to ensure we deliver quality. I've had a chance to lead
            other developers on multiple occasion and have found it immensely
            rewarding.`,
  `I’m looking to continue growing as a people leader
            and develop great applications. Send me a message!`,
];

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  image?: string;
  demo?: string;
  repo?: string;
  link?: string;
  external?: string;
  live?: boolean;
  library?: boolean;
  command?: string;
}

export const projects: Project[] = [
  {
    name: "Liberty Mutual RightTrack",
    description:
      "RightTrack is a program that puts you in control of your auto policy savings by evaluating your safe driving habits. Some specific behaviors observed by RightTrack include braking, acceleration, and nighttime driving.",
    techStack: ["Express", "Node.js", "MongoDB", "React", "Java"],
    external: "https://www.libertymutual.com/righttrack",
  },
  {
    name: "ChainLink",
    description:
      "A clone of a sports streak game. Choose correct sports winners to build your chain. Built with Next.js, PlanetScale, Drizzle, and Upstash.  Data is powered by SportsDataVerse.",
    techStack: [
      "Next.js",
      "Redis",
      "Planetscale",
      "Drizzle",
      "Vercel",
      "Typescript",
    ],
    image: "/images/chainlinkpreview.png",

    live: true,
  },
  {
    name: "SportsDataVerse",
    description:
      "A Node.js wrapper for the remaining public ESPN APIs, and a few other sports APIs. Scraping when necessary.",
    techStack: ["Node.js", "Mocha", "NPM", "Vercel"],
    external: "https://js.sportsdataverse.org/",
    repo: "https://github.com/sportsdataverse/sportsdataverse-js",
    library: true,
    command: "npm install sportsdataverse",
  },
  {
    name: "'Merc-Chan' Discord Bot",
    description:
      "Merc Chan is a multipurpose discord bot serving thousands of users. Tools range from moderation, community engagement, and creative production. Has access to the OpenAI API.",
    techStack: ["Discord.js", "Node.js", "MongoDB", "OpenAI"],
    repo: "https://github.com/MercsClan/mercchan",
  },
  {
    name: "Wellforce Covid19 Automations",
    description:
      "Automated time consuming data entry and paper work for time sensitive in person testing. Saved clinicians 50 hours per day in data entry and made the in-person covid testing process up to seven and a half times faster.",
    techStack: ["Selenium", "Node.js", "AWS", "OpenCV"],
    external:
      "https://www.prnewswire.com/news-releases/olives-ai-workforce-to-revolutionize-covid-19-testing-at-tufts-medical-center-301139423.html",
  },

  {
    name: "FloorPlanner",
    description:
      "3D Floor planning application built with Three.js and React. Drag and drop furniture, build walls and rooms, and save your plans. Subscribe with Stripe to unlock more save slots.",
    techStack: [
      "Three.js",
      "Express",
      "PostgreSQL",
      "React",
      "Redux",
      "Stripe",
    ],
    demo: "https://capstone-production-e9d2.up.railway.app/",
    repo: "https://github.com/StonefortSolutions/capstone",
  },
  {
    name: "Generative Ai Toolset",
    description:
      "A collection of tools to generate text, images, video, audio, and more. Powered by OpenAI and Replicate's APIs. Built with Next.js. API Limited without Stripe subscription.",
    techStack: [
      "Next.js",
      "Stripe",
      "OpenAI",
      "PostgreSQL",
      "Vercel",
      "Typescript",
    ],
    image: "/images/aipreview.png",
    demo: "https://gen.mercsclan.com",
    repo: "https://github.com/unmonk/generativeai",
  },
  {
    name: "WeaverScott.com",
    description:
      "This website! A Next.js app router application built with Typescript, Tailwind CSS, and Vercel.",
    techStack: ["Next.js", "Vercel", "Typescript"],
    demo: "https://weaverscott.com",
    repo: "https://github.com/unmonk/weaverscott",
  },
];

export const profile = {
  name: "Scott Weaver",
  title: "Lead Software Engineer",
  email: "Scott@WeaverScott.com",
  image: "/images/me.jpg",
  "og:title": "Scott Weaver",
  "og:description": "Full Stack Developer",
  "og:image": "/images/profile.jpg",
};
