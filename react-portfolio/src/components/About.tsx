import image from '/assets/image.png'

const About = () => {
	return (
		<section className="px-4">
			<h2 className="text-[2rem] font-semibold">
				About Me
			</h2>
			<div className="mt-[1rem] flex flex-col gap-2 max-w-[355px] text-gray">
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
			<img src={image} alt="Francis's picture" />
		</section>
	)
}

export default About