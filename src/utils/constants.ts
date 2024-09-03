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
import PostgresSqlIcon from '/assets/icon-postgressql.png';
import MaterialUiIcon from '/assets/icon-material-ui.png';
import AwsIcon from '/assets/icon-aws.png';
import firstProject from "/assets/image-project-one.png"
import secondProject from "/assets/image-project-two.png"

export const ProjectsList = [
	{
		image: firstProject,
		alt: "Vidtube Project",
		name: "Vidtube",
		repositoryLink: "https://github.com/Francis7575/Vidtube",
		liveLink: "https://vidtube-1k5m.onrender.com",
		techs: [
			{ icon: ReactIcon, name: "React" },
			{ icon: TypescriptIcon, name: "TypeScript" },
			{ icon: NodeJsIcon, name: "Node.js" },
			{ icon: TailwindIcon, name: "Tailwind CSS" },
			{ icon: MaterialUiIcon, name: "Material UI" }
		]
	},
	{
		image: secondProject,
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
	{ icon: PostgresSqlIcon, tooltip: "PostgreSQL", duration: 5 },
	{ icon: GitIcon, tooltip: "Git", duration: 2 },
	{ icon: ReduxIcon, tooltip: "React-Redux", duration: 4 },
	{ icon: AwsIcon, tooltip: "Aws", duration: 1.5 },
];