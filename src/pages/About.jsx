import { AboutUs } from "../components/AboutUs"


export const About = () => {
	return (
		<div>
			<div className="py-40 bg-black text-center text-white px-4">
				<h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">About Us Page</h2>
			</div>
			<div className="max-w-7xl mx-auto">
				<AboutUs />
			</div>
		</div>
	)
}
