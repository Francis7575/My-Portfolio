import openMenu from '/assets/open-menu.png';
import closeMenu from '/assets/close-menu.png';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
	const menuOptions = ["About Me", "Skills", "Projects", "Contact"];

	const handleToggleMenu = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	return (
		<header className="border-b-2 border-lightgray relative">
			<div className='flex justify-between items-center px-4 md:px-8 py-[1.25rem]'>
				<p className="gradient-text font-bold text-lg md:text-xl">
					franciss.dev
				</p>
				<nav className={`pt-[4.7rem] pl-[2rem] fixed md:static md:pl-0 md:pt-0 top-0 right-0 min-h-screen md:min-h-0 z-20 w-[72%] md:w-auto bg-body md:bg-transparent
                        transition-transform duration-300 ease-in-out md:transform-none ${isMenuOpened ? 'translate-x-0' : 'translate-x-full'}`}>
					<ul className='flex flex-col gap-4 md:flex-row md:justify-end'>
						{menuOptions.map((option, idx) => (
							<li key={idx}>
								<a className='text-[1.4rem] md:text-[1.2rem] menu-options' href="#">
									{option}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<button onClick={handleToggleMenu} className='relative z-30 md:hidden '>
					<img src={isMenuOpened ? closeMenu : openMenu} alt="Menu icon" className={`transition-all ${isMenuOpened ? 'w-[1.6rem]' : 'w-[2rem]'}`} />
				</button>
			</div>
			{isMenuOpened && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={handleToggleMenu}></div>
			)}
		</header>
	);
}

export default Header;
