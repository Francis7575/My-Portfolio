import { motion } from "framer-motion";

const About = () => {
	return (
		<section id="about" className="px-4 md:px-8 xl:px-0 420:max-w-[400px] 420:mx-auto sm:max-w-none sm:mx-none">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 1.5 }}
				className="mt-10 md:mt-20 text-center text-[1.8rem] font-medium"
			>
				About Me
			</motion.h2>
			<motion.div className='flex flex-col items-center text-center'
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 100 }}
				transition={{ duration: 1.5 }}
			>
				<div className="mt-[1rem] flex flex-col gap-6 max-w-[500px] md:max-w-[800px] lg:text-[1.1rem] w-full text-gray">
					<p>
						My name's Francis, I'm based in Vancouver BC, I was born in Dominican Republic recently finished my web & app development studies, I have a strong passion for coding
						and i truly enjoy it. I'm excited to continue advancing my skills and to have the opportunity to work
						in this dynamic field. I really like to learn new technologies makes me feel more powerful in the programming world and
						i'm the kind of person that doesn't have any issue receiving feedbacks since it's through those feedbacks that we enhance ourself,
						not just in programming but in all aspects of life.
					</p>
					<p>
						I stay active and enjoy running 🏃‍♂️. It's a great way to balance my professional and personal life
						while keeping energized and motivated.
					</p>
				</div>
			</motion.div>
		</section>
	)
}

export default About