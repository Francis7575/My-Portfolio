import { Technologies, Header, Hero, About, Projects, Contact } from "./components"

const App = () => {
	return (
		<>
			<Header />
			<main className="lg:max-w-[1200px] lg:mx-auto">
				<Hero />
				<About />
				<Technologies />
				<Projects />
				<Contact />
			</main>
		</>
	)
}

export default App