import { Lorem } from "./Lorem"

export const AboutUs = () => {
	return (
		<div className="py-10 flex flex-col items-center justify-center">
			<h3 className="text-7xl font-bold mb-9">We&apos;re</h3>
			<div className="grid grid-cols-1 gap-5 px-4 lg:grid-cols-2">
				<div className="flex flex-col justify-center items-center">
					<p className="text-3xl font-semibold text-gray-400 tracking-tight">
						<Lorem />
					</p>
				</div>
				<div className="inline-flex flex-col items-center justify-center w-full gap-14">
					<img src="/1.png" alt="building" />
					<img src="/2.png" alt="inside building" />
				</div>
			</div>
		</div>
	)
}