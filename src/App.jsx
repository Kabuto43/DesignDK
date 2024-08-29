import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import "./App.css"
import { Footer } from "./components/Footer"

export const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}