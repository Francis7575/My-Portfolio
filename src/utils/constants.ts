import JavatscriptIcon from "/assets/icon-javascript.png";
import NodeJsIcon from "/assets/icon-nodejs.png";
import TailwindIcon from "/assets/icon-tailwind.png";
import TypescriptIcon from "/assets/icon-typescript.png";
import ReactIcon from "/assets/icon-react.png";
import NextjsIcon from "/assets/icon-nextjs.png";
import OpenaiIcon from "/assets/icon-openai.png";
import MongodbIcon from "/assets/icon-mongodb.png";
import GitIcon from "/assets/icon-git.png";
import NeonIcon from "/assets/icon-neon.png";
import ReduxIcon from "/assets/icon-redux.png";
import PostgreSqlIcon from "/assets/icon-postgresql.png";
import MaterialUiIcon from "/assets/icon-material-ui.png";
import VueIcon from "/assets/icon-vue.png";
import ExpressIcon from "/assets/icon-express.png";
import MuiIcon from "/assets/icon-material-ui.png";
import ZustandIcon from "/assets/zustand.jpg";
import Bootstrap from "/assets/icon-bootstrap.png";
import Docker from "/assets/icon-docker.png";
import Firebase from "/assets/icon-firebase.png";
import ShadcnUiIcon from "/assets/shadcn-ui.png";
import DrizzleOrm from "/assets/drizzle-orm.png";
import mernOPENAI from "/assets/image-mern-openai.png";
import Replicate from "/assets/replicate.png";
import Gemini from "/assets/icon-gemini.png";
import AssemblyAI from "/assets/icon-assemblyai.png";
import Remotion from "/assets/icon-remotion.png";
import RapidAPI from "/assets/icon-rapid-api.png";
import AIredesignroom from "/assets/image-ai-redesign-room.png";
import vidtube from "/assets/image-vidtube.png";
import spaceTourism from "/assets/image-space-tourism.png";
import currencyConverter from "/assets/image-currency.png";
import galaxySurfers from "/assets/image-galaxysurfers.png";
import countriesInfo from "/assets/image-countries-info.png";
import miniEcommerce from "/assets/image-mini-ecommerce.png";
import shortVideoAI from "/assets/image-shortvideo-ai.png";

export const Technologies = [
  { icon: JavatscriptIcon, tooltip: "Javascript", duration: 2.5 },
  { icon: TypescriptIcon, tooltip: "Typescript", duration: 3 },
  { icon: ReactIcon, tooltip: "React", duration: 3 },
  { icon: NextjsIcon, tooltip: "Next.js", duration: 1.5 },
  { icon: VueIcon, tooltip: "Vue.js", duration: 2 },
  { icon: TailwindIcon, tooltip: "Tailwind CSS", duration: 5 },
  { icon: Bootstrap, tooltip: "Bootstrap", duration: 2 },
  { icon: MuiIcon, tooltip: "Material UI", duration: 3 },
  { icon: ReduxIcon, tooltip: "React Redux", duration: 4 },
  { icon: NodeJsIcon, tooltip: "Node.js", duration: 2.5 },
  { icon: ExpressIcon, tooltip: "Express", duration: 3 },
  { icon: MongodbIcon, tooltip: "MongoDB", duration: 3 },
  { icon: PostgreSqlIcon, tooltip: "PostgreSQL", duration: 5 },
  { icon: DrizzleOrm, tooltip: "Drizzle-ORM", duration: 1.5 },
  { icon: GitIcon, tooltip: "Git", duration: 2 },
  { icon: Firebase, tooltip: "Firebase", duration: 4 },
  { icon: Docker, tooltip: "Docker", duration: 2 },
];

export const ProjectsList = [
  {
    image: galaxySurfers,
    alt: "GalaxySurfers IMS Project",
    name: "GalaxySurfers IMS",
    repositoryLink: "https://github.com/Francis7575/galaxysurfers-IMS",
    liveLink: "https://galaxysurfers-ims-client.vercel.app",
    description:
      "GalaxySurfers is an advanced inventory management system that lets you design and visualize your warehouse in a 3D model. Easily track products entering and exiting the warehouse, ensuring efficient inventory control and management.",
    listOne: "Warehouse design 3D model",
    listTwo: "Enable UserPermissions",
    listThree: "RESTFul APIs",
    listFour: "Upload image and save it to cloudinary",
    techs: [
      { icon: ReactIcon, name: "React" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: NodeJsIcon, name: "Node.js" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
      { icon: PostgreSqlIcon, name: "PostgreSQL" },
      { icon: ExpressIcon, name: "Express" },
    ],
  },
  {
    image: shortVideoAI,
    alt: "Short video generator AI",
    name: "AI Short Video Generator | SAAS APP",
    repositoryLink: "https://github.com/Francis7575/ShortVideoGenerator-AI",
    liveLink: "https://short-video-generator-ai.vercel.app",
    description:
      "This SAAS application lets users create short videos with audio, images, captions, and scripts, powered by advanced AI APIs for seamless and intelligent content generation.",
    listOne:
      "Saved users and videoData in Postgres db along with Drizzle ORM and Neon.",
    listTwo: "Stored Video audio and images in firebase storage.",
    listThree: "Implemented Clerk-authentication.",
    listFour: "Integrated Paypal payment gateway.",
    techs: [
      { icon: NextjsIcon, name: "Nextjs" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: ShadcnUiIcon, name: "Shadcn UI" },
      { icon: TailwindIcon, name: "TailwindCSS" },
      { icon: Firebase, name: "Firebase" },
      { icon: PostgreSqlIcon, name: "PostgreSQL" },
      { icon: DrizzleOrm, name: "Drizzle-ORM" },
      { icon: NeonIcon, name: "Neon" },
      { icon: Replicate, name: "Replicate API" },
      { icon: Gemini, name: "Gemini API" },
      { icon: AssemblyAI, name: "AssemblyAI API" },
      { icon: Remotion, name: "Remotion Video" },
    ],
  },
  {
    image: mernOPENAI,
    alt: "MERN GPT Project",
    name: "MERN GPT OPENAI",
    repositoryLink: "https://github.com/Francis7575/MERN-GPT-OPENAI",
    liveLink: "https://mern-gpt-openai-client.vercel.app",
    description:
      "This Chatbot application enables seamless interaction with the GPT-4 model, providing intelligent conversational responses.",
    listOne:
      "Connects directly to the GPT-4 model via the OpenAI API for enhanced conversational capabilities.",
    listTwo:
      "User authentication system with login, signup, and JSON Web Token (JWT) validation",
    listThree:
      "React Syntax Highlighter for precise and visually appealing code block rendering.",
    techs: [
      { icon: ReactIcon, name: "React" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: MaterialUiIcon, name: "Material UI" },
      { icon: NodeJsIcon, name: "Node" },
      { icon: ExpressIcon, name: "Express" },
      { icon: MongodbIcon, name: "MongoDB" },
      { icon: OpenaiIcon, name: "OpenAI API" },
    ],
  },
  {
    image: AIredesignroom,
    alt: "AI redesign room Project",
    name: "AI Redesign Room | SAAS APP",
    repositoryLink: "https://github.com/Francis7575/InteriorDesignGen-AI",
    liveLink: "https://interior-design-gen-ai.vercel.app",
    description:
      "This SAAS application enables users to redesign their room interiors by uploading an image, selecting a room type, choosing a design style, and entering an optional prompt to generate a customized design image.",
    listTwo: "Implemented Clerk-authentication",
    listOne: "Save image uploaded in firebase-storage",
    listThree: "Used of replicate API",
    listFour: "Integrated Paypal payment gateway",
    techs: [
      { icon: NextjsIcon, name: "Nextjs" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: ShadcnUiIcon, name: "Shadcn UI" },
      { icon: TailwindIcon, name: "TailwindCSS" },
      { icon: Firebase, name: "Firebase" },
      { icon: PostgreSqlIcon, name: "PostgreSQL" },
      { icon: DrizzleOrm, name: "Drizzle-ORM" },
      { icon: NeonIcon, name: "Neon" },
      { icon: Replicate, name: "Replicate API" },
    ],
  },
  {
    image: vidtube,
    alt: "Vidtube Project",
    name: "Vidtube",
    repositoryLink: "https://github.com/Francis7575/Vidtube",
    liveLink: "https://vidtube-pi.vercel.app",
    description:
      "A Video Player project utilizing the YouTube API from RapidAPI, featuring user authentication with basic login and signup functionality.",
    listOne: "Video detail page",
    listTwo: "Search functionality",
    listThree: "Channel detail page",
    listFour: "Dynamic video feeds integration",
    techs: [
      { icon: ReactIcon, name: "React" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
      { icon: MaterialUiIcon, name: "Material UI" },
      { icon: NodeJsIcon, name: "Node.js" },
      { icon: ExpressIcon, name: "Express" },
      { icon: MongodbIcon, name: "MongoDB" },
      { icon: RapidAPI, name: "Rapid API" },
    ],
  },
  {
    image: miniEcommerce,
    alt: "miniEcommerce Project",
    name: "Mini Ecommerce",
    repositoryLink: "https://github.com/Francis7575/mini-ecommerce-website",
    liveLink: "https://ecommerce-website-i9kc.onrender.com",
    description:
      "This eCommerce web application contains a dynamic product catalog, detailed product pages, shopping cart, and a checkout page. The project includes essential eCommerce functionality, providing a user-friendly experience across all devices.",
    listOne: "Global state management for cart functionality using Zustand.",
    listTwo:
      "Full responsiveness with Tailwind CSS for seamless user experience on any screen size.",
    listThree:
      "Dynamic routing for easy navigation between product categories and details.",
    techs: [
      { icon: ReactIcon, name: "React" },
      { icon: ZustandIcon, name: "Zustand" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
    ],
  },
  {
    image: spaceTourism,
    alt: "Space tourism",
    name: "Space tourism multi-page",
    repositoryLink:
      "https://github.com/Francis7575/Space-tourism-multi-page-website",
    liveLink: "https://space-tourism-multi-page-website-five-iota.vercel.app",
    description:
      "This project is a multi-page website built with Vue.js that features dynamic tab switching across different pages using vue-router. It also includes smooth transitions between tabs, implemented with Vue's transition element, enhancing the user experience, . The design was based on Figma, ensuring a consistent and optimized layout across all screen sizes.",
    listOne: "Hands with data.json file",
    listTwo: "Vue-router and transition elements",
    techs: [
      { icon: VueIcon, name: "Vue" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
    ],
  },
  {
    image: countriesInfo,
    alt: "Countries Project",
    name: "Countries Portal",
    repositoryLink: "https://github.com/Francis7575/Countries-Info",
    liveLink: "https://countries-info-f7hl.onrender.com",
    description:
      "This application provides comprehensive statistics and information about every country in the world, including details such as population, region, capital, native name, currencies, etc.",
    listOne: "Easily search for individual countries using the input field.",
    listTwo:
      "Narrow down countries by applying continent-based filters for more precise exploration.",
    listThree:
      "Toggle between light and dark modes to enhance user experience based on personal preference.",
    listFour:
      "Utilize LazyLoad, suspense, and lazy components to improve performance and loading speed.",
    techs: [
      { icon: ReactIcon, name: "React" },
      { icon: ReduxIcon, name: "React Redux" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
    ],
  },
  {
    image: currencyConverter,
    alt: "XchangeCurrency Project",
    name: "XchangeCurrency",
    repositoryLink: "https://github.com/Francis7575/XchangeCurrency",
    liveLink: "https://xchangecurrency-ret0.onrender.com",
    description:
      "This Currency Exchange Application possesses an API from API Ninjas to provide real-time currency conversion. It also includes a user-friendly rating form integrated with EmailJS, enabling you to receive user feedback directly via email.",
    listOne: "Real-time Currency Exchange",
    listTwo: "Interactive Rating Form",
    listThree: "Form submission status saved in localStorage",
    techs: [
      { icon: ReactIcon, name: "React" },
      { icon: TypescriptIcon, name: "TypeScript" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
    ],
  },
];
