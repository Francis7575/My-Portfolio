import JavatscriptIcon from '/assets/icon-javatscript.png';
import NodeJsIcon from '/assets/icon-nodejs.png';
import SassIcon from '/assets/icon-sass.png';
import TailwindIcon from '/assets/icon-tailwind.png';
import TypescriptIcon from '/assets/icon-typescript.png';
import ReactIcon from '/assets/icon-react.png';
import NextjsIcon from '/assets/icon-nextjs.png';
import MongodbIcon from '/assets/icon-mongodb.png';
import GitIcon from '/assets/icon-git.png';
import ReduxIcon from '/assets/icon-redux.png';
import PostgreSqlIcon from '/assets/icon-postgresql.png';
import MaterialUiIcon from '/assets/icon-material-ui.png';
import VueIcon from '/assets/icon-vue.png'
import ExpressIcon from '/assets/icon-express.png'
import MuiIcon from '/assets/icon-material-ui.png'
import galaxySurfers from "/assets/image-galaxysurfers.png"
import mernOPENAI from "/assets/image-mern-openai.png"
import vidtube from "/assets/image-vidtube.png"
import spaceTourism from "/assets/image-space-tourism.png"
import currencyConverter from "/assets/image-currency-converter.png"
import testImage from "/assets/galaxy-test.png"

export const Technologies = [
	{ icon: JavatscriptIcon, tooltip: "Javascript", duration: 2.5},
	{ icon: TypescriptIcon, tooltip: "Typescript", duration: 3},
	{ icon: ReactIcon, tooltip: "React", duration: 3},
	{ icon: VueIcon, tooltip: "Vue.js", duration: 2 },
	{ icon: NextjsIcon, tooltip: "Next.js", duration: 1.5, },
	{ icon: NodeJsIcon, tooltip: "Node.js", duration: 2.5, },
	{ icon: ExpressIcon, tooltip: "Express", duration: 3 },
	{ icon: TailwindIcon, tooltip: "Tailwind Css", duration: 5},
	{ icon: MuiIcon, tooltip: "Material UI", duration: 3 },
	{ icon: SassIcon, tooltip: "Sass", duration: 4 },
	{ icon: MongodbIcon, tooltip: "Mongo DB", duration: 3 },
	{ icon: PostgreSqlIcon, tooltip: "PostgreSQL", duration: 5 },
	{ icon: GitIcon, tooltip: "Git", duration: 2 },
	{ icon: ReduxIcon, tooltip: "React Redux", duration: 4 },
];

export const ProjectsList = [
	{
		image: testImage,
		alt: "GalaxySurfers IMS Project",
		name: "GalaxySurfers IMS",
		repositoryLink: "https://github.com/Francis7575/galaxysurfers-IMS",
		liveLink: "https://galaxysurfers-ims-client.vercel.app",
		description: 'GalaxySurfers is an advanced inventory management system that lets you design and visualize your warehouse in a 3D model. Easily track products entering and exiting the warehouse, ensuring efficient inventory control and management.',
		listOne: 'Warehouse design 3D model',
		listTwo: 'Enable UserPermissions',
		listThree: 'RESTFul APIs',
		listFour: 'Upload image and save it to cloudinary',
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
		image: mernOPENAI,
		alt: "MERN GPT OPENAI API Project",
		name: "MERN-GPT-OPENAI",
		repositoryLink: "https://github.com/Francis7575/MERN-GPT-OPENAI",
		liveLink: "https://mern-gpt-openai-client.vercel.app",
		description: 'This Chatbot application enables seamless interaction with the GPT-4 model, providing intelligent conversational responses.',
		listTwo: 'Connects directly to the GPT-4 model via the OpenAI API for enhanced conversational capabilities.',
		listOne: 'User authentication system with login, signup, and JSON Web Token (JWT) validation',
		listThree: 'React Syntax Highlighter for precise and visually appealing code block rendering.',
		techs: [
			{ icon: ReactIcon, name: "React" },
			{ icon: TypescriptIcon, name: "TypeScript" },
			{ icon: MaterialUiIcon, name: "Material UI" },
			{ icon: NodeJsIcon, name: "Node" },
			{ icon: ExpressIcon, name: "Express" },
			{ icon: MongodbIcon, name: "MongoDB" },
		],
	},
	{
		image: vidtube,
		alt: "Vidtube Project",
		name: "Vidtube",
		repositoryLink: "https://github.com/Francis7575/Vidtube",
		liveLink: "https://vidtube-pi.vercel.app",
		description: 'A Video Player project utilizing the YouTube API from RapidAPI, featuring user authentication with basic login and signup functionality.',
		listOne: 'Video detail page',
		listTwo: 'Search functionality',
		listThree: 'Channel detail page',
		listFour: 'Dynamic video feeds integration',
		techs: [
			{ icon: ReactIcon, name: "React" },
			{ icon: TypescriptIcon, name: "TypeScript" },
			{ icon: NodeJsIcon, name: "Node.js" },
			{ icon: TailwindIcon, name: "Tailwind CSS" },
			{ icon: MaterialUiIcon, name: "Material UI" },
			{ icon: ExpressIcon, name: "Express" }
		],
	},
	{
		image: spaceTourism,
		alt: "Space tourism",
		name: "Space tourism multi-page",
		repositoryLink: "https://github.com/Francis7575/Space-tourism-multi-page-website",
		liveLink: "https://space-tourism-multi-page-website-five-iota.vercel.app",
		description: "This project is a multi-page website built with Vue.js that features dynamic tab switching across different pages using vue-router. It also includes smooth transitions between tabs, implemented with Vue's transition element, enhancing the user experience, . The design was based on Figma, ensuring a consistent and optimized layout across all screen sizes.",
		listOne: 'Hands with data.json file',
		listTwo: 'Vue-router and transition elements',
		techs: [
			{ icon: VueIcon, name: "Vue" },
			{ icon: TypescriptIcon, name: "TypeScript" },
			{ icon: TailwindIcon, name: "Tailwind CSS" },
		]
	},
	{
		image: currencyConverter,
		alt: "XchangeCurrency Project",
		name: "XchangeCurrency",
		repositoryLink: "https://github.com/Francis7575/XchangeCurrency",
		liveLink: "https://xchangecurrency-ret0.onrender.com",
		description: 'This Currency Exchange Application possesses an API from API Ninjas to provide real-time currency conversion. It also includes a user-friendly rating form integrated with EmailJS, enabling you to receive user feedback directly via email.',
		listOne: 'Real-time Currency Exchange',
		listTwo: 'Interactive Rating Form',
		listThree: 'Form submission status saved in localStorage',
		techs: [
			{ icon: ReactIcon, name: "React" },
			{ icon: TypescriptIcon, name: "TypeScript" },
			{ icon: TailwindIcon, name: "Tailwind CSS" },
		],
	},
	
]

