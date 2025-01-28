import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import EmidsLogo from "@/data/images/logos/Emids.png";
import IBMLogo from "@/data/images/logos/IBM.png";

export const RESUME_DATA = {
  name: "Ewhan Han",
  initials: "EH",
  location: "North York / Toronto, Canada",
  locationLink: "https://www.google.com/maps/place/northyork",
  about:
    "Detail-oriented Full Stack Developer dedicated to crafting high-quality products.",
  summary:
    "Under the wings of some super-smart folks, I've learned a ton, contributed to cool client projects, and juggled deadlines. I love a good challenge and getting my hands dirty in all things code. In short, it's been a journey of growing, coding, and thriving in a team that loves tech as much as I do! Currently, I work mostly with TypeScript, React, and Node.js.",
  avatarUrl: "https://avatars.githubusercontent.com/u/40779221?v=4",
  personalWebsiteUrl: "https://ewhan.me",
  contact: {
    email: "ewhan.han@gmail.com",
    tel: "+15196392489",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ewhanhan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ewhanhan/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Western University",
      degree: "BA in Economics",
      start: "2011",
      end: "2016",
    },
    {
      school: "Western University",
      degree: "BESc in Software Engineering",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Emids",
      link: "https://www.emids.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: EmidsLogo,
      start: "2022",
      end: "Current",
      description:
        "Current role as a Full Stack Developer at Emids, working on a variety of projects in the healthcare sector. I work with a team of developers to build and maintain web applications that help healthcare providers deliver better care to their patients.",
    },
    {
      company: "IBM",
      link: "https://www.ibm.com/sterling",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: IBMLogo,
      start: "2020",
      end: "2022",
      description:
        "Engaged as an Engineer within IBM’s hybrid cloud strategy team, focusing on the IBM Sterling Supply Chain. Contributed to enterprise-level support for IBM Sterling SaaS applications, enhancing client experiences in implementing and deploying complex supply chain solutions in a cloud environment.",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js/Remix", "Node.js"],
  projects: [
    {
      title: "EPulseAI",
      techStack: ["Python", "TypeScript", "React", "Material UI"],
      description:
        "Developed EPulseAI, a groundbreaking Generative AI-powered platform by Emids, designed to revolutionize and simplify healthcare product development from ideation to rollout. The platform enhances medical care quality, improves patient outcomes, and delivers an intuitive user experience by automating time-consuming tasks, saving time and resources for healthcare stakeholders.",
      logo: EmidsLogo,
      link: {
        label: "emids.com/epulse-ai",
        href: "https://www.emids.com/epulse-ai/",
      },
    },
    {
      title:
        "The Royal's Rapid Access Addiction Medicine (RAAM) Digital Front Door",
      techStack: [
        "TypeScript",
        "React",
        "Material UI",
        "Twilio Video SDK",
        "Hive",
      ],
      description:
        "A platform that  allows patients to connect with healthcare professionals through video conferencing. It includes features like preliminary questionnaires, health card validation, and the ability to include family members or support workers in appointments. The initiative aims to provide easy and broad access to healthcare",
      logo: null,
      link: {
        label: "accessraam.ca",
        href: "https://theroyal.accessraam.ca/",
      },
    },
    {
      title: "IBM Salesforce Extras",
      techStack: ["JavaScript", "Bootstrap", "JQuery", "Browser Extension"],
      description:
        "Browser extension designed to enhance the efficiency and user experience of case management systems. This extension introduced a suite of features aimed at improving case visibility, streamlining workflow, and increasing productivity for users.",
      logo: null,
      link: {
        label: "IBM Salesforce Extras",
        href: "https://chromewebstore.google.com/detail/ibm-salesforce-extras/gpmkkenlhceokknfjgfkmlgaeljnhnkp",
      },
    },
  ],
} as const;

export type ResumeData = typeof RESUME_DATA;
