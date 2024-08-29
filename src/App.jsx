import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import "./App.css"

export const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}