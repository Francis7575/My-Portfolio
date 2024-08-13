import githubIcon from "/assets/icon-github.png"
import openIcon from "/assets/icon-open.png"
import { motion } from "framer-motion";
import { ProjectsList } from "../utils/constants";

const Projects = () => {
	return (
		<section id="projects">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 1.5 }}
				className="my-10 md:mt-20 text-center text-[1.8rem] font-medium"
			>
				Projects
			</motion.h2>
			<motion.div className="px-4 md:px-8 xl:px-0 gap-x-7 grid-projects grid"
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 100 }}
				transition={{ duration: 1.5 }}
			>
				{ProjectsList.map((item, idx) => (
					<div key={idx}
						className="mx-auto w-full mb-8 md:mx-0 flex flex-col max-w-[420px] md:max-w-none">
						<div className="relative">
							<a href={item.liveLink} target="_blank" >
								<img className="rounded-t-2xl hover:opacity-50 h-[220px] w-full "
									src={item.image}
									alt={item.alt}
								/>
							</a>
							<a className="max-w-[25px]"
								href={item.repositoryLink} target="_blank">
								<img src={githubIcon} alt="Github" className="max-w-[40px] absolute top-2 right-2" />
							</a>
							<a href={item.liveLink} target="_blank">
								<img src={openIcon} alt="Live Web" className="w-full max-w-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
							</a>
						</div>
						<div className="px-5 shadow-lg py-4 rounded-b-2xl flex-grow flex flex-col">
							<h2 className="text-2xl">
								{item.name}
							</h2>
							<div className="grid-techs flex-grow">
								{item.techs.map((tech, techIdx) => (
									<div key={techIdx}
										className="flex">
										<div className="flex items-center gap-2">
											<img
												src={tech.icon}
												alt={tech.name}
												className="w-6 h-6"
											/>
											<p className="text-sm">{tech.name}</p>
										</div>
									</div>
								))}
							</div>
							{idx === 0 && (
								<div className="text-[.85rem] text-gray mt-4">
									<p>
										A Video Player project utilizing the YouTube API from RapidAPI,
										featuring user authentication with basic login and signup functionality.
									</p>
									<ul className="list-disc mt-2 pl-4">
										<li>Video detail page</li>
										<li> Search functionality</li>
										<li>Channel detail page</li>
										<li>Dynamic video feeds integration</li>
									</ul>
								</div>
							)}
							{idx === 1 && (
								<div className="text-[.85rem] text-gray mt-4">
									<p>
										This Currency Exchange Application possesses an API
										from API Ninjas to provide real-time currency conversion.
										It also includes a user-friendly rating form integrated with
										EmailJS, enabling you to receive user feedback directly via email.
									</p>
									<ul className="list-disc mt-2 pl-4">
										<li>Real-time Currency Exchange</li>
										<li>Interactive Rating Form</li>
										<li>Form submission status saved in localStorage</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				))}

			</motion.div>
		</section>
	)
}

export default Projects