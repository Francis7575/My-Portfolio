import githubIcon from "/assets/icon-github.png"
import { ExternalLink } from 'lucide-react'
// import youtubeIcon from "/assets/icon-youtube.png"
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsList } from "../utils/constants";
import { useState } from "react";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const selectProject = (index: number, newDirection: "left" | "right") => {
    setDirection(newDirection);

    if (index < 0) {
      setSelectedIndex(ProjectsList.length - 1); // Wrap to the last project
    } else if (index >= ProjectsList.length) {
      setSelectedIndex(0); // Wrap to the first project
    } else {
      setSelectedIndex(index);
    }
  };

  const projectVariants = {
    hidden: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100, // slide from the left or right
    }),
    visible: { opacity: 1, x: 0 }, // animation for entering
    exit: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "left" ? 100 : -100, // slide to the left or right
    }),
  };

  return (
    <section id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5 }}
        className="mt-10 md:mt-20 text-center text-[1.8rem] font-medium"
      >
        Projects
      </motion.h2>
      <motion.div className="px-4 md:px-8 xl:px-0 gap-x-7"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      >
        <AnimatePresence mode='wait' >
          {ProjectsList.map((item, idx) =>
            selectedIndex === idx ? (
              <div key={idx} className='relative min-h-[750px] md:min-h-0'>
                <motion.div
                  custom={direction}
                  className="mx-auto w-full md:mx-0 md:mt-6 md:flex md:items-center max-w-[420px] md:max-w-none"
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className={`relative flex-1`}>
                    <a href={item.liveLink} target="_blank">
                      <img
                        className='hover:opacity-50 max-w-[500px] w-full mt-10 md:mt-0'
                        src={item.image}
                        alt={item.alt}
                      />
                    </a>
                    <a
                      href={item.repositoryLink}
                      target="_blank"
                      className={`${item.id === 7 && 'hidden'}`}
                    >
                      <img
                        src={githubIcon}
                        alt="Github"
                        className="absolute hover:opacity-70 top-[120px] max-w-[40px] right-[7px] lg:top-[180px] xl:top-[210px] xl:right-[60px] cursor-pointer"
                      />
                    </a>
                    {item.repositories?.map((repo, idx) => (
                      <a
                        key={idx}
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center absolute hover:opacity-70 cursor-pointer ${idx === 0
                            ? 'top-[90px] max-w-[40px] right-[17px] lg:top-[120px] xl:top-[120px] xl:right-[100px]'
                            : 'top-[170px] max-w-[40px] right-[17px] lg:top-[240px] xl:top-[250px] xl:right-[100px]'
                          }`}
                      >
                        <img src={githubIcon} alt={`GitHub - ${repo.label}`} />
                        <span>{repo.label}</span>
                      </a>
                    ))}
                    <a href={item.liveLink} target="_blank"
                      className="w-full max-w-[22px] hover:opacity-50 absolute top-[100px] lg:top-[130px] left-1/2 lg:left-[220px] xl:top-[150px] xl:left-[250px] transform -translate-x-1/2 -translate-y-1/2">
                      <ExternalLink style={{ color: 'lightblue' }} />
                    </a>
                  </div>
                  <div className="px-5 py-4 lg:pl-12 rounded-b-2xl flex-1 flex flex-col">
                    <h2 className="text-2xl">{item.name}</h2>
                    <div className="mt-2">
                      <p>{item.description}</p>
                      <ul className="list-disc mt-2 pl-4">
                        <li>{item.listOne}</li>
                        <li>{item.listTwo}</li>
                        {item.listThree && <li>{item.listThree}</li>}
                        {item.listFour && <li>{item.listFour}</li>}
                      </ul>
                    </div>
                    <div className="grid-techs">
                      {item.techs.map((tech, techIdx) => (
                        <div key={techIdx} className="flex">
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
                  </div>
                </motion.div>
              </div>
            ) : null
          )}
        </AnimatePresence>
      </motion.div>
      {/* Render buttons for each project */}
      <div className="max-w-[300px] 500:max-w-[400px] md:max-w-[660px] 900:max-w-[700px] w-full mx-auto">
        <div className="grid grid-cols-8 md:grid-cols-11 900:grid-cols-12 max-w-[400px] items-center gap-8 md:gap-16 z-50 relative mt-20 md:mt-12">
          {ProjectsList.map((_, idx) => (
            <button
              key={idx}
              aria-pressed={selectedIndex === idx}
              aria-label={`Tab ${ProjectsList[idx].name}`}
              className={`w-[11px] h-[11px] md:w-[15px] md:h-[15px] rounded-full hover:bg-success-two ${selectedIndex === idx ? "bg-success " : "bg-thirdgray hover:opacity-70"
                }`}
              onClick={() => selectProject(idx, idx > selectedIndex ? "right" : "left")}
            >
            </button>
          ))
          }
        </div>
      </div>
    </section >
  )
}

export default Projects