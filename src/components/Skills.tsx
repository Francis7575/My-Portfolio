import { motion, Variants } from "framer-motion";
import JavatscriptIcon from '/assets/icon-javatscript.png'
import NodeJsIcon from '/assets/icon-nodejs.png'
import SassIcon from '/assets/icon-sass.png'
import TailwindIcon from '/assets/icon-tailwind.png'
import TypescriptIcon from '/assets/icon-typescript.png'
import ReactIcon from '/assets/icon-react.png'
import NextjsIcon from '/assets/icon-nextjs.png'
import MongodbIcon from '/assets/icon-mongodb.png'
import GitIcon from '/assets/icon-git.png'
import ReduxIcon from '/assets/icon-redux.png'
import PostgresSqlIcon from '/assets/icon-postgressql.png'
import AwsIcon from '/assets/icon-aws.png'


type IconVariantsProps = {
	duration: number
}
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
				<motion.div
					variants={iconVariants({ duration: 2.5 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={JavatscriptIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Javascript</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 3 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={ReactIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">React</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 5 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={TailwindIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Tailwind Css</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 3 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={TypescriptIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Typescript</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 2.5 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={NodeJsIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Node.js</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 4 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={SassIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Sass</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 1.5 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={NextjsIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Next.js</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 3 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={MongodbIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Mongo DB</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 5 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={PostgresSqlIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">PostgreSQL</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 2 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={GitIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Git</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 4 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={ReduxIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">React-Redux</span>
				</motion.div>
				<motion.div
					variants={iconVariants({ duration: 1.5 })}
					initial="initial"
					animate="animate"
					className="rounded-2xl p-4 tooltip"
				>
					<img src={AwsIcon} alt="" className="w-[4rem] mx-auto"/>
					<span className="tooltiptext">Aws</span>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Skills