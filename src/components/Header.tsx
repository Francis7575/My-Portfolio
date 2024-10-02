import { useState, MouseEvent } from 'react';
import openMenu from '/assets/open-menu.png';
import closeMenu from '/assets/close-menu.png';
import { motion } from "framer-motion"

const Header = () => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	const menuOptions = [
		{ name: "About Me", href: "#about" },
		{ name: "Technologies", href: "#technologies" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
		{ name: "More Frontend Projects", href: "https://www.frontendmentor.io/profile/Francis7575" }
	];

	const handleToggleMenu = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	const handleScroll = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
		event.preventDefault();
		const targetElement = document.querySelector(targetId) as HTMLElement;
		const headerOffset = 60; // Adjust based on your header height
		const additionalOffset = 30; // Additional offset to scroll further down
		const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
		const offsetPosition = elementPosition - headerOffset - additionalOffset;

		window.scrollTo({
			top: offsetPosition,
		});
		setIsMenuOpened(false); // Close the menu after clicking a link
	};



	return (
		<>
			<motion.header transition={{ duration: 1.5, delay: 0.25 }} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
				className='font-raleway border-b-2 border-lightgray z-30 fixed top-0 w-full backdrop-blur-lg backdrop-filter '>
				<div className='lg:max-w-[1200px] lg:mx-auto'>
					<div className='flex justify-between items-center px-4 md:px-8 xl:px-0 py-[1.25rem] '>
						<p className="gradient-text font-bold text-lg md:text-xl">
							franciss.dev
						</p>
						<nav className={`pt-[4.7rem] pl-[2rem] fixed md:static md:pl-0 md:pt-0 top-0 right-0 min-h-screen md:min-h-0 w-[72%] md:w-auto bg-body md:bg-transparent
                        transition-transform duration-300 ease-in-out md:transform-none ${isMenuOpened ? 'translate-x-0' : 'translate-x-full'}`}>
							<ul className='flex flex-col gap-8 md:gap-4 lg:gap-8 xl:gap-12 md:flex-row md:justify-end'>
								{menuOptions.map((option, idx) => (
									<li key={idx}>
										<a
											href={option.href}
											onClick={(e) => {
												if (option.name !== "More Frontend Projects") {
													handleScroll(e, option.href);
												}
											}}
											target={option.name === "More Frontend Projects" ? '_blank' : '_self'}
											className='text-[1.2rem] md:text-[1rem] menu-options text-gray'
										>
											{option.name}
										</a>
									</li>
								))}
							</ul>
						</nav>
						<button onClick={handleToggleMenu} className='relative z-50 md:hidden'>
							<img src={isMenuOpened ? closeMenu : openMenu} alt="Menu icon" className={`transition-all ${isMenuOpened ? 'w-[1.6rem]' : 'w-[2rem]'}`} />
						</button>
					</div>
				</div>
			</motion.header>
			{isMenuOpened && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={handleToggleMenu}></div>
			)}
		</>
	);
};

export default Header;
