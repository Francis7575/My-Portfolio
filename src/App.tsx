import { Technologies, Header, Hero, About, Projects, Contact, Footer } from "./components"

const App = () => {
	return (
		<>
			<Header />
			<main className="font-roboto-condensed lg:max-w-[1200px] lg:mx-auto">
				<Hero />
				<About />
				<Technologies />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default App