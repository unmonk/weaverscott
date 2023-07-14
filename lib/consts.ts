export const employers: Employer[] = [
  {
    name: "Available",
    title: "Available",
    dateStart: "Present",
    dateEnd: "Present",
    navYear: "Hire Me",
    description: "",
    logo: "",
  },
  {
    name: "Spot",
    title: "Lead Software Engineer",
    dateStart: "04/2022",
    dateEnd: "08/2022",
    navYear: "2022",
    description: "",
    logo: "",
    link: "https://www.getspot.com/",
    tech: ["Nest.js", "C#", "Kafka"],
    experience: [
      "Led the integration departments transition to an event-driven architecture, and rapidly prototyped solutions.",
      "Implemented a forward chaining rule engine to streamline and optimize multiple disparate rulesets.",
      "Collaborated on a Tech Council of the most senior engineers to shape the company's technology strategy and roadmap",
    ],
  },
  {
    name: "Olive AI",
    title: "Lead Software Engineer",
    dateStart: "06/2020",
    dateEnd: "04/2022",
    navYear: "2022",
    description: "",
    logo: "",
    link: "https://oliveai.com/",
    tech: ["Node.js", "Selenium", "OpenCV", "AWS"],
  },
  {
    name: "Innovate Softworks",
    title: "Software Engineer",
    dateStart: "08/2018",
    dateEnd: "06/2020",
    navYear: "2020",
    description: "",
    logo: "",
    link: "https://innovatesoftworks.com/",
    tech: ["Electron", "React", "Node.js", "MSSQL", "C#"],
  },
  {
    name: "Liberty Mutual",
    title: "Software Engineer II",
    dateStart: "01/2016",
    dateEnd: "08/2018",
    navYear: "2018",
    description: "",
    logo: "",
    link: "https://www.libertymutual.com/",
    tech: [],
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
];

export const aboutMeParagraphs = [
  ` I’m a full stack developer and team leader with 8 years of
    experience. A Javascript dominate polyglot, I believe in choosing
            the right tools for the job, and am not afraid to pick up other
            stacks.
            `,
  ` I develop practical and maintainable software. Collaborate
            closely with my business partners, product owners and other
            stakeholders to ensure we deliver quality. I've had a chance to lead
            other developers on multiple occasion and have found it immensely
            rewarding. Hiring, growing, and retaining good people is the key to
            good products.`,
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
}

export const projects: Project[] = [
  {
    name: "RightTrack / Highway Hero",
    description:
      "RightTrack is a program that puts you in control of your auto policy savings by evaluating your safe driving habits. Some specific behaviors observed by RightTrack include braking, acceleration, and nighttime driving.",
    techStack: ["Express", "Node.js", "MongoDB", "React"],
    image: "/yoshi.png",
    external: "https://www.libertymutual.com/righttrack",
  },
  {
    name: "Streaks",
    description:
      "An open source clone of the ESPN Streak for the cash application from the late 2000s. Cron jobs keep scores and statuses up to date. Powered by a library I maintian called SportsDataVerse.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Vercel",
      "Typescript",
    ],
    image: "/yoshi.png",
    demo: "https://mercstreaks.vercel.app/",
    repo: "https://github.com/unmonk/mercstreaks",
  },
  {
    name: "Merc Chan",
    description:
      "Merc Chan is a multipurpose discord bot serving thousands of users. Tools range from moderation, community engagement, and creative production. Has access to the OpenAI API.",
    techStack: ["Discord.js", "Node.js", "MongoDB", "OpenAI"],
    image: "/yoshi.png",
    repo: "https://github.com/MercsClan/mercchan",
  },
  {
    name: "Covid19 Testing",
    description:
      "Automated time consuming data entry and paper work for time sensitive in person testing. Saved clinicians 50 hours per day in data entry and made the in-person covid testing process up to seven and a half times faster.",
    techStack: ["Selenium", "Node.js", "AWS", "OpenCV"],
    image: "/yoshi.png",
    external:
      "https://www.prnewswire.com/news-releases/olives-ai-workforce-to-revolutionize-covid-19-testing-at-tufts-medical-center-301139423.html",
  },
  {
    name: "SportsDataVerse",
    description:
      "A Node.js wrapper for the remaining public ESPN APIs, and a few other sports APIs. Scraping when necessary. Powers the Streaks application.",
    techStack: ["Node.js", "Mocha", "NPM"],
    image: "/yoshi.png",
    link: "https://www.npmjs.com/package/sportsdataverse",
    demo: "https://js.sportsdataverse.org/",
    repo: "https://github.com/sportsdataverse/sportsdataverse-js",
  },
  {
    name: "FloorPlanner",
    description: "3D Floor planning application built with Three.js and React.",
    techStack: ["Three.js", "Express", "PostgreSQL", "React", "Redux"],
    image: "/yoshi.png",
    demo: "https://capstone-production-e9d2.up.railway.app/",
    repo: "https://github.com/StonefortSolutions/capstone",
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
