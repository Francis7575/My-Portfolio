import firstProject from "/assets/image-project-one.png"
import githubIcon from "/assets/icon-github.png"
import openIcon from "/assets/icon-open.png"
import NodeJsIcon from '/assets/icon-nodejs.png';
import ReactIcon from '/assets/icon-react.png';
import TailwindIcon from '/assets/icon-tailwind.png';
import TypescriptIcon from '/assets/icon-typescript.png';
import MaterialUiIcon from '/assets/icon-material-ui.png';
import { motion } from "framer-motion";

const Projects = () => {
	const ProjectsList = [
		{
			image: firstProject,
			alt: "Vidtube Project",
			name: "Vidtube",
			repositoryLink: "https://github.com/Francis7575/Vidtube",
			liveLink: "https://vidtube-1.onrender.com",
			techs: [
				{ icon: ReactIcon, name: "React" },
				{ icon: TypescriptIcon, name: "TypeScript" },
				{ icon: NodeJsIcon, name: "Node.js" },
				{ icon: TailwindIcon, name: "Tailwind CSS" },
				{ icon: MaterialUiIcon, name: "Material UI" }
			]
		}
	];
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
			<motion.div className="px-4 md:px-8 xl:px-0"
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 100 }}
				transition={{ duration: 1.5 }}
			>
				{ProjectsList.map((item, idx) => (
					<div key={idx}
						className="mx-auto max-w-[370px] lg:max-w-[400px] mb-8 sm:mx-0">
						<div className="relative">
							<a href={item.liveLink} target="_blank" >
								<img className="rounded-t-2xl hover:opacity-50"
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
						<div className="border-2 border-lightgray px-5 shadow-lg py-4 rounded-b-2xl">
							<h2 className="text-2xl">
								{item.name}
							</h2>
							<div className="grid-techs ">
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
						</div>
					</div>
				))}

			</motion.div>
		</section>
	)
}

export default Projects