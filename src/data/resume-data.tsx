import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import EmidsLogo from "@/images/logos/Emids.png";
import IBMLogo from "@/images/logos/IBM.png";

export const RESUME_DATA = {
  name: "Ewhan Han",
  initials: "EH",
  location: "North York / Toronto, Canada",
  locationLink: "https://www.google.com/maps/place/northyork",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
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
      degree: "B.A in Economics",
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
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "IBM",
      link: "https://www.ibm.com/sterling",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: IBMLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js/Remix", "Node.js"],
  projects: [
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
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: null,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: null,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
