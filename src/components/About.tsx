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
			<motion.div className='sm:flex sm:justify-between sm:items-center sm:gap-4'
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 100 }}
				transition={{ duration: 1.5 }}
			>
				<div className="mt-[1rem] flex flex-col gap-2 max-w-[500px] lg:text-[1.1rem] w-full text-gray">
					<p>
						My name's Francis, currently focused on Web Development, aiming to build innovative
						applications and automate tasks through efficient coding.
					</p>
					<p>
						When I'm not programming, you might find me playing tennis 🎾 with
						friends if the weather allows.
					</p>
					<p>
						I also have a keen interest in staying active and embrace the joy of running 🏃‍♂️.
					</p>
				</div>
				<div className='image-box'></div>
			</motion.div>
		</section>
	)
}

export default About