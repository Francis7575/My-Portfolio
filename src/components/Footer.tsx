import ReactIcon from '/assets/icon-react.png';
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="font-roboto-condensed bg-thirdgray py-4 px-4 md:px-8 xl:px-0">
			<div
				className="flex flex-col gap-1 items-center md:flex-row md:justify-between max-w-[1200px] mx-auto text-dark-gray font-semibold">
				<motion.div transition={{ duration: 1.5 }} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
					className='flex items-center gap-2'>
					<p>Created in </p>
					<div className='tooltip'>
						<img src={ReactIcon} alt="React" className='w-6' />
						<span className="tooltiptext">React</span>
					</div>
					<p>by Francis</p>
				</motion.div>
				<motion.p transition={{ duration: 1.5 }} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
					className=' text-center'>
					Copyright © 2024 all rights reserved
				</motion.p>
			</div>
		</footer>
	)
}

export default Footer;
