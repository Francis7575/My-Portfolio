import { motion } from "framer-motion"

const Hero = () => {
	return (
		<motion.div className="px-4 md:px-8 xl:px-0 mt-[5.5rem] sm:flex sm:justify-between sm:items-center md:mt-[130px] 420:max-w-[400px] 420:mx-auto sm:max-w-none sm:mx-none"
			whileInView={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: -10 }}
			transition={{ duration: 1.5, delay: 0.25 }}>
			<div className='basis-3/6 '>
				<div>
					<span className='text-xl lg:text-2xl'>Hey there! 👋, I'm-</span>
					<h1 className="gradient-text text-5xl lg:text-6xl font-extrabold mt-[.5rem] lg:mt-4	">Francis Sanchez</h1>
					<span className="dev-gradient text-3xl lg:text-4xl font-bold mt-2 ">Full Stack Developer.</span>
				</div>
				<div className="flex flex-col gap-6 lg:gap-8 mt-[2.5rem] text-gray lg:text-[1.1rem] max-w-[355px] lg:max-w-[500px]">
					<p>
						A full stack web development student at
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
				</div>
			</div>
			<div className='image-box'></div>
		</motion.div>
	)
}

export default Hero