import { ModelViewer } from '.'

const Hero = () => {
	return (
		<section className="px-4 md:px-8 mt-[5.5rem] sm:flex sm:justify-between sm:items-center 420:max-w-[400px] 420:mx-auto sm:max-w-none sm:mx-none">
			<div className='basis-3/6 '>
				<div>
					<p className='text-xl'>Hey there! 👋, I'm-</p>
					<h1 className="gradient-text text-5xl font-extrabold mt-[.5rem]">Francis Sanchez</h1>
					<p className="dev-gradient text-3xl font-bold mt-2 ">Frontend Developer.</p>
				</div>
				<div className="flex flex-col gap-6 mt-[2.5rem] text-gray max-w-[355px] lg:max-w-[500px]">
					<p>
						A full stack web development student at
						<a href="https://ciccc.ca/" target='_blank'
							className='ml-2 text-blue-700 underline'>
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
			<div className='basis-3/6 flex justify-center pb-[4rem]'>
				<ModelViewer path={"/3d-images/test.glb"} scale={[5, 5, 5]} />
			</div>
		</section>
	)
}

export default Hero