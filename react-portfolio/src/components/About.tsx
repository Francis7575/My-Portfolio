
const About = () => {
	return (
		<section className="px-4 md:px-8">
			<h2 className="text-[2rem] font-semibold sm:mt-8">
				About Me
			</h2>
			<div className='sm:flex sm:justify-between sm:items-center sm:gap-4'>
				<div className="mt-[1rem] flex flex-col gap-2 max-w-[380px] text-gray">
					<p>
						Hey I'm Francis, currently focused on Web Development, aiming to build innovative
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
			</div>
		</section>
	)
}

export default About