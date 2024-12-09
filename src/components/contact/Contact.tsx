import { useState, useEffect, ChangeEvent, FormEvent, FocusEvent } from 'react';
import iconAt from '/assets/icon-at-sign.png'
import iconEmail from '/assets/icon-email.gif'
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import IconGithub from '/assets/icon-github.png'
import IconLinkedin from '/assets/icon-linkedin.png'
import IconFrontendMentor from '/assets/icon-frontendmentor.png'
import CustomAlert from './CustomAlert';
// import videoUrl from "/assets/WebDevDemo.mp4"

type FormData = {
	name: string;
	email: string;
	message: string;
}

type FormErrors = {
	name?: string;
	email?: string;
	message?: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: ''
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [alertMessage, setAlertMessage] = useState<string>('');
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [errors, setErrors] = useState<FormErrors>({});

	const socialMediaIcons = [
		{ icon: IconGithub, link: 'https://github.com/Francis7575', alt: 'Github' },
		{ icon: IconFrontendMentor, link: 'https://www.frontendmentor.io/profile/Francis7575', alt: 'Frontend Mentor' },
		{ icon: IconLinkedin, link: 'https://www.linkedin.com/in/francis-sanchez-03b05b293/', alt: 'Linkedin' },
	]
	useEffect(() => {
		emailjs.init('T1bCbVM4o9-_Jx2Ya');
	}, []);

	const validateForm = (): boolean => {
		let formErrors: FormErrors = {};
		let isValid = true;

		if (!formData.name) {
			isValid = false;
			formErrors.name = 'Name is required';
		}

		if (!formData.email) {
			isValid = false;
			formErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			isValid = false;
			formErrors.email = 'Email address is invalid';
		}

		if (!formData.message) {
			isValid = false;
			formErrors.message = 'Message is required';
		}

		setErrors(formErrors);
		return isValid;
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		setIsLoading(true);
		setErrors({});

		if (validateForm()) {
			emailjs.sendForm('service_6l6i6si', 'template_q7s8lqn', e.currentTarget)
				.then(() => {
					setFormData({
						name: '',
						email: '',
						message: ''
					});
					setIsLoading(false);
					setShowAlert(true);
					setAlertMessage('Form submitted successfully!');
				})
				.catch((error: any) => {
					console.error('FAILED...', error);
					setIsLoading(false);
					setAlertMessage('Form submission failed!');
					setShowAlert(true);
				});
		} else {
			setIsLoading(false);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleInputFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name } = e.target;
		setErrors(prevErrors => {
			const newErrors = { ...prevErrors };
			if (name === "name" || name === "email" || name === "message") {
				delete newErrors[name as keyof FormErrors];
			}
			return newErrors;
		});
	};

	return (
		<section id="contact" className='pb-10'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
				transition={{ duration: 1.5 }}
				className="mt-10 mb-4 md:mb-14 md:mt-20 text-center text-[1.8rem] font-medium"
			>
				Contact
			</motion.h2>
			<div className='flex flex-col items-center'>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className='basis-3/6 lg:flex lg:justify-start mb-[4rem] px-4 lg:px-0 lg:pl-8'>
				{/* <video width="550" controls>
					<source src={videoUrl} type="video/mp4" />
				</video> */}
			</motion.div>
				<motion.div className='flex flex-col px-4 md:px-8 xl:px-0 w-full mx-auto max-w-[550px] md:mx-0'
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1.5 }}>
					<div className='basis-2/5'>
						<h2 className='gradient-text font-medium text-[1.4rem] lg:text-[2rem]'>Would you like to work
							<span className='dev-gradient text-lightgray ml-2'>Together?</span>
						</h2>
						<div>
							<p>Email:</p>
							<p className='font-medium'>francis.albert.2009@gmail.com</p>
						</div>
						<div>
							<p>Call:</p>
							<p className='font-medium'>+1 6723385312</p>
						</div>
						<div className='flex items-center justify-between mt-4 gap-5 '>
							{socialMediaIcons.map((item, idx) => (
								<a key={idx} className='hover:opacity-60'
									href={item.link} target='_blank'>
									<img src={item.icon} alt={item.alt} className={`w-[35px] ${idx === 2 && 'w-[45px]'}`} />
								</a>
							))}
						</div>
					</div>
					<form className='mt-8 w-full flex flex-col gap-8 basis-3/6 relative'
						onSubmit={handleSubmit}>
						<div className={`${isLoading ? 'block' : 'hidden'} text-center text-loading font-bold absolute top-[-20] left-1/2 transform -translate-x-1/2`}
							style={{ top: '-20px' }}>
							Loading...
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor="name">Name</label>
							<div className='relative w-full'>
								<input
									className='py-2 pl-7 pr-3 text-[.9rem] outline-none w-full'
									type="text"
									name="name"
									id="name"
									value={formData.name}
									onChange={handleChange}
									onFocus={handleInputFocus}
									placeholder="Your name"
								/>
								<img src={iconAt} alt="" className='absolute-position max-w-[1.1rem] lg:max-w-[1.2rem]' />
								{errors.name && <span className="absolute top-11 left-1 text-error text-[.85rem]">{errors.name}</span>}
							</div>
						</div>
						<div className='flex flex-col gap-2 '>
							<label htmlFor="email">Email</label>
							<div className='relative w-full'>
								<input
									className='py-2 pl-7 pr-3 w-full text-[.9rem] outline-none'
									type="text"
									name="email"
									id="email"
									value={formData.email}
									onChange={handleChange}
									onFocus={handleInputFocus}
									placeholder="Your email"
								/>
								<img src={iconEmail} alt="" className='absolute-position max-w-[1.1rem] lg:max-w-[1.2rem]' />
								{errors.email && <span className="absolute top-11 left-1 text-error text-[.85rem]">{errors.email}</span>}
							</div>
						</div>
						<div className='flex flex-col gap-2 relative'>
							<label htmlFor="message">Message</label>
							<textarea
								className='py-1 pl-4 pt-2 pr-3 text-[.9rem] resize-none outline-none'
								name="message"
								id="message"
								value={formData.message}
								onChange={handleChange}
								onFocus={handleInputFocus}
								placeholder="What's on your mind?"
							/>
							{errors.message && <span className="absolute top-24 left-1 text-error text-[.85rem]">{errors.message}</span>}
						</div>
						<div className='flex justify-end mr-4'>
							<button type="submit" className='relative btn-styles bg-second-blue text-white py-[.81rem] rounded-lg w-full max-w-[150px] hover:opacity-60'>
								Send Message
							</button>
						</div>
					</form>
				</motion.div>
			</div>
			{showAlert && <CustomAlert message={alertMessage} onClose={() => setShowAlert(false)} />}
		</section>
	);
};

export default ContactForm;