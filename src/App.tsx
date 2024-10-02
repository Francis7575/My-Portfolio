import { Suspense, lazy, useEffect, useState } from 'react';
import LoadingPage from './components/LoadingPage'

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Technologies = lazy(() => import('./components/Technologies'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 200); 
		return () => clearTimeout(timer);
	}, []);

	return (
		<Suspense fallback={loading ? <LoadingPage /> : null}>
			<Header />
			<main className="font-roboto-condensed lg:max-w-[1200px] lg:mx-auto">
				<Hero />
				<About />
				<Technologies />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</Suspense>
	)
}

export default App