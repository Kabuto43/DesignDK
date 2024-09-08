import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"

export const ContactUs = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-8 mt-11 mb-11">
  <div className="flex flex-col items-center text-gray-500 font-bold">
    {/* Phone number */}
    <h2 className="text-4xl md:text-5xl mb-6">Our Phone number:</h2>
    <p className="mb-12 font-semibold text-gray-400 text-2xl md:text-3xl">
      <a href="tel:+X-XXX-XXX-XXX" className="hover:text-gray-800">+X-XXX-XXX-XXX</a>
    </p>

    {/* Email */}
    <h2 className="text-4xl md:text-5xl mb-6">Our Email:</h2>
    <p className="mb-12 font-semibold text-gray-400 text-2xl md:text-3xl">
      <a href="mailto:design_dk@dk.com" className="hover:text-gray-800">design_dk@dk.com</a>
    </p>
  </div>

  {/* Socials */}
  <div className="grid grid-cols-3 gap-10">
    <a href="#" className="text-gray-500 transition-all duration-300 hover:text-orange-500">
      <FaTwitter className="w-16 h-16 md:w-20 md:h-20" />
    </a>
    <a href="#" className="text-gray-500 transition-all duration-300 hover:text-orange-500">
      <FaInstagram className="w-16 h-16 md:w-20 md:h-20" />
    </a>
    <a href="#" className="text-gray-500 transition-all duration-300 hover:text-orange-500">
      <FaFacebook className="w-16 h-16 md:w-20 md:h-20" />
    </a>
  </div>
</div>
	)
}