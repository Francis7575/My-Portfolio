import { motion, Variants } from "framer-motion";
import { FrontendTechs, BackendTechs, OtherTechs } from "../utils/constants";

type IconVariantsProps = {
	duration: number;
};

const iconVariants = ({ duration }: IconVariantsProps): Variants => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "easeInOut",
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
			>
				<h3 className="gradient-text text-[1.2rem] lg:text-[1.4rem] text-center mb-2 font-semibold">Frontend</h3>
				<div className="grid-layout gap-2">
					{FrontendTechs.map((skill, idx) => (
						<motion.div
							key={idx}
							variants={iconVariants({ duration: skill.duration })}
							initial="initial"
							animate="animate"
							className="rounded-2xl p-4 tooltip"
						>
							<img src={skill.icon} alt={skill.tooltip} className="max-w-[45px] max-h-[45px] mx-auto" />
							<span className="tooltiptext">{skill.tooltip}</span>
						</motion.div>
					))}
				</div>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 100 }}
				transition={{ duration: 1.5 }}
			>
				<h3 className="gradient-text text-[1.2rem] lg:text-[1.4rem] text-center my-2 font-semibold">Backend</h3>
				<div className="grid-layout gap-2">
					{BackendTechs.map((skill, idx) => (
						<motion.div
							key={idx}
							variants={iconVariants({ duration: skill.duration })}
							initial="initial"
							animate="animate"
							className="rounded-2xl p-4 tooltip"
						>
							<img src={skill.icon} alt={skill.tooltip} className="max-w-[50px] max-h-[45px] mx-auto" />
							<span className="tooltiptext">{skill.tooltip}</span>
						</motion.div>
					))}
				</div>
			</motion.div>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
			>
				<h3 className="gradient-text text-[1.2rem] lg:text-[1.4rem] text-center my-2 font-semibold">Others</h3>
				<div className="grid-layout gap-2">
					{OtherTechs.filter(skill => skill.icon && skill.tooltip).map((skill, idx) => (
						<motion.div
							key={idx}
							variants={iconVariants({ duration: skill.duration })}
							initial="initial"
							animate="animate"
							className="rounded-2xl p-4 tooltip"
						>
							<img src={skill.icon} alt={skill.tooltip} className="max-w-[50px] max-h-[45px] w-full mx-auto" />
							<span className="tooltiptext">{skill.tooltip}</span>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
}

export default Skills;
