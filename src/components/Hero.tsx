import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	return (
		<motion.div className="px-4 md:px-8 xl:px-0 mt-[5.5rem] sm:flex sm:justify-between sm:items-center md:mt-[130px] 420:max-w-[400px] 420:mx-auto sm:max-w-none sm:mx-none"
			whileInView={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: -10 }}
			transition={{ duration: 1.5 }}>
			<div className='basis-3/6 '>
				<div>
					<span className='text-xl lg:text-2xl'>Hey there! 👋, I'm-</span>
					<h1 className="gradient-text text-5xl lg:text-6xl font-extrabold mt-[.5rem] lg:mt-4	">Francis Sanchez</h1>
					<TypeAnimation
						sequence={[
							"Full Stack Developer",
							1000,
							"MERN STACK",
							2000,
							"PERN STACK",
							1500,
						]}
						speed={50}
						className="type-animation"
						repeat={Infinity}
					/>
				</div>
				<div className="flex flex-col gap-6 mt-[1.7rem] text-gray lg:text-[1.1rem] max-w-[355px] lg:max-w-[500px]">
					<p>
						A full stack web development graduated from
						<a href="https://ciccc.ca/" target='_blank'
							className='ml-2 text-blue underline hover:opacity-60'>
							Cornerstone International Community College of Canada.
						</a>
					</p>
					<p>
						🚀 Currently specializing in Frontend (React / Next.js)
					</p>
					<p>
						🛠️ Crafting user web friendly applications and functional websites.
					</p>
					<button className="btn-styles relative py-2 px-4 rounded-lg inline-block text-white max-w-[170px]">
						<a href="/Resume.pdf" download>
							Download Resume
						</a>
					</button>
				</div>
			</div>
			<div className='image-box'></div>
		</motion.div>
	)
}

export default Hero