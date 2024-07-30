import { motion, Variants } from "framer-motion";
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
import AwsIcon from '/assets/icon-aws.png';

const skills = [
	{ icon: JavatscriptIcon, tooltip: "Javascript", duration: 2.5 },
	{ icon: ReactIcon, tooltip: "React", duration: 3 },
	{ icon: TailwindIcon, tooltip: "Tailwind Css", duration: 5 },
	{ icon: TypescriptIcon, tooltip: "Typescript", duration: 3 },
	{ icon: NodeJsIcon, tooltip: "Node.js", duration: 2.5 },
	{ icon: SassIcon, tooltip: "Sass", duration: 4 },
	{ icon: NextjsIcon, tooltip: "Next.js", duration: 1.5 },
	{ icon: MongodbIcon, tooltip: "Mongo DB", duration: 3 },
	{ icon: PostgresSqlIcon, tooltip: "PostgreSQL", duration: 5 },
	{ icon: GitIcon, tooltip: "Git", duration: 2 },
	{ icon: ReduxIcon, tooltip: "React-Redux", duration: 4 },
	{ icon: AwsIcon, tooltip: "Aws", duration: 1.5 },
];

type IconVariantsProps = {
	duration: number;
};

const iconVariants = ({ duration }: IconVariantsProps): Variants => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Skills = () => {
	return (
		<div className="border-b border-neutral-800 pb-24">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 1.5 }}
				className="mt-20 mb-8 text-center text-[1.8rem] font-medium"
			>
				Skills
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className="grid-layout gap-2"
			>
				{skills.map((skill, idx) => (
					<motion.div
						key={idx}
						variants={iconVariants({ duration: skill.duration })}
						initial="initial"
						animate="animate"
						className="rounded-2xl p-4 tooltip"
					>
						<img src={skill.icon} alt={skill.tooltip} className="w-[4rem] mx-auto" />
						<span className="tooltiptext">{skill.tooltip}</span>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

export default Skills;
