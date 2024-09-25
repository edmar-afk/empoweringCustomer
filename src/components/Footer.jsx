/* eslint-disable react/no-unescaped-entities */import chatbotIcon from '../assets/svg/chatbot.svg'

function Footer() {	return (
	<>
		<footer>
			<div className="bg-[#182b50] px-8 py-16">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12">
					<div className="text-center md:text-left">
						<h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]">
							Are you confused or need more Info?
						</h2>
						<p className="text-lg lg:text-xl text-white">
							Contact our chatbot service and ask anything relevant
						</p>
						<a
							href="#"
							className="mt-12 bg-green-500 hover:bg-opacity-80 text-gray-100 py-3 px-6 rounded-full text-lg lg:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block">
							Chat me now!
						</a>
					</div>
					<div className="text-center">
						<img
							src={chatbotIcon}
							alt="Premium Benefits"
							className="w-full mx-auto"
						/>
					</div>
				</div>
			</div>
			<div className="bg-green-700 py-4 text-gray-100">
				<div className="container mx-auto px-4">
					<div className="-mx-4 flex flex-wrap justify-between">
						<div className="px-4 w-full text-center sm:w-auto sm:text-left">
							Copyright © 2024 Empowering Customer Interactions
						</div>
						<div className="px-4 w-full text-center sm:w-auto sm:text-left">Smart Chatbots in Support Services</div>
					</div>
				</div>
			</div>
		</footer>
	</>
);
}

export default Footer;
