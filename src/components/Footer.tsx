import ReactIcon from '/assets/icon-react.png';

const Footer = () => {
	return (
		<footer className="bg-thirdgray py-4 px-4 md:px-8 xl:px-0">
			<div className="flex flex-col gap-1 items-center md:flex-row md:justify-between max-w-[1200px] mx-auto text-white font-semibold">
				<div className='flex items-center gap-2'>
					<p>Created in </p>
					<div className='tooltip'>
						<img src={ReactIcon} alt="React" className='w-6' />
						<span className="tooltiptext">React</span>
					</div>
					<p>by Francis</p>
				</div>
				<p className='md:flex-grow text-center'>Copyright © 2024 all rights reserved</p>
			</div>
		</footer>
	)
}

export default Footer;
