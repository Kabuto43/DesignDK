import { Lorem } from "./Lorem"

export const ServicesPage = () => {
	return (
		<div className="py-10 flex flex-col items-center justify-center">
			<h3 className="text-7xl font-bold mb-9">Our Employees</h3>
			<div className="grid grid-cols-2 gap-5">
				<div className="flex flex-col justify-center items-center">
					<p className="text-3xl font-semibold text-gray-400 tracking-tight">
						<Lorem />
					</p>
				</div>
				<div className="inline-flex flex-col items-center justify-center w-[600px] gap-11 mt-16">
					<img src="/3.png" alt="building" />
					<img src="/4.png" alt="inside building"/>
				</div>
			</div>
		</div>
	)
}