import { motion, Variants } from "framer-motion";
import { Technologies } from "../utils/constants";

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
		<div id="technologies">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 1.5 }}
				className="mt-20 mb-8 text-center text-[1.8rem] font-medium"
			>
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className="grid-layout gap-2"
			>
				{Technologies.map((skill, idx) => (
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
