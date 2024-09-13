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
import AwsIcon from '/assets/icon-aws.png';
import VueIcon from '/assets/icon-vue.png'
import ExpressIcon from '/assets/icon-express.png'
import firstProject from "/assets/image-project-one.png"
import secondProject from "/assets/image-project-two.png"
import thirdProject from "/assets/image-project-three.png"

export const ProjectsList = [
	{
		image: firstProject,
		alt: "GalaxySurfers IMS Project",
		name: "GalaxySurfers IMS",
		repositoryLink: "https://github.com/Francis7575/galaxysurfers-IMS",
		liveLink: "https://www.youtube.com/watch?v=Sp2cpRGX1OY&t=14s",
		techs: [
			{ icon: ReactIcon, name: "React" },
			{ icon: TypescriptIcon, name: "TypeScript" },
			{ icon: NodeJsIcon, name: "Node.js" },
			{ icon: TailwindIcon, name: "Tailwind CSS" },
			{ icon: PostgreSqlIcon, name: "PostgreSQL" },
			{ icon: ExpressIcon, name: "Express" },
		]
	},
	{
		image: secondProject,
		alt: "Vidtube Project",
		name: "Vidtube",
		repositoryLink: "https://github.com/Francis7575/Vidtube",
		liveLink: "https://vidtube-1k5m.onrender.com",
		techs: [
			{ icon: ReactIcon, name: "React" },
			{ icon: TypescriptIcon, name: "TypeScript" },
			{ icon: NodeJsIcon, name: "Node.js" },
			{ icon: TailwindIcon, name: "Tailwind CSS" },
			{ icon: MaterialUiIcon, name: "Material UI" },
			{ icon: ExpressIcon, name: "Express" }
		]
	},
	{
		image: thirdProject,
		alt: "XchangeCurrency Project",
		name: "XchangeCurrency",
		repositoryLink: "https://github.com/Francis7575/XchangeCurrency",
		liveLink: "https://xchangecurrency-ret0.onrender.com/",
		techs: [
			{ icon: ReactIcon, name: "React" },
			{ icon: TypescriptIcon, name: "TypeScript" },
			{ icon: TailwindIcon, name: "Tailwind CSS" },
		]
	}
];

export const Technologies = [
	{ icon: JavatscriptIcon, tooltip: "Javascript", duration: 2.5},
	{ icon: ReactIcon, tooltip: "React", duration: 3},
	{ icon: TailwindIcon, tooltip: "Tailwind Css", duration: 5},
	{ icon: TypescriptIcon, tooltip: "Typescript", duration: 3},
	{ icon: NodeJsIcon, tooltip: "Node.js", duration: 2.5, },
	{ icon: SassIcon, tooltip: "Sass", duration: 4 },
	{ icon: NextjsIcon, tooltip: "Next.js", duration: 1.5, },
	{ icon: MongodbIcon, tooltip: "Mongo DB", duration: 3 },
	{ icon: PostgreSqlIcon, tooltip: "PostgreSQL", duration: 5 },
	{ icon: GitIcon, tooltip: "Git", duration: 2 },
	{ icon: ReduxIcon, tooltip: "React-Redux", duration: 4 },
	{ icon: AwsIcon, tooltip: "Aws", duration: 1.5 },
	{ icon: ExpressIcon, tooltip: "Express", duration: 3 },
	{ icon: VueIcon, tooltip: "Vue.js", duration: 2 },
];