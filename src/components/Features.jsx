/* eslint-disable react/no-unescaped-entities */ import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

function Features() {
	return (
		<section className="py-24 bg-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-14 text-center">
					<h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
						Affordability and value, high-quality products to budget-conscious shoppers
					</h2>
					<p className="text-base font-normal text-green-500 lg:max-w-2xl lg:mx-auto mb-8 flex items-center justify-center">
						<LocationOnOutlinedIcon /> Poblacion, Bayog Zamboanga Del Sur
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
					<div className="relative w-full h-auto md:col-span-2">
						<div className="bg-gray-800 rounded-2xl flex  justify-between flex-row flex-wrap">
							<div className="p-5  xl:p-8 w-full md:w-1/2 ">
								<div className="block">
									<svg
										width="30"
										height="30"
										viewBox="0 0 30 30"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"></path>
									</svg>
								</div>
								<h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
									Shop When You Need: Opening Times
								</h3>
								<p className="text-xs font-bold text-gray-300 w-full mb-1 xl:w-64">BIG B ENTERPRISES</p>
								<p className="text-xs font-normal text-green-300 w-full mb-8 xl:w-64">
									<AccessTimeOutlinedIcon /> Opens @ 8:00am - Close @ 8:00pm
								</p>

								<p className="text-xs font-bold text-gray-300 w-full mb-1 xl:w-64">MEJOS STORE</p>
								<p className="text-xs font-normal text-green-300 w-full mb-8 xl:w-64">
									<AccessTimeOutlinedIcon /> Opens @ 8:00am - Close @ 8:00pm
								</p>

								<p className="text-xs font-bold text-gray-300 w-full mb-1 xl:w-64">Joemar's Triple 8 Grocery</p>
								<p className="text-xs font-normal text-green-300 w-full mb-8 xl:w-64">
									<AccessTimeOutlinedIcon /> Opens @ 8:00am - Close @ 8:00pm
								</p>
							</div>
							<div className="relative hidden h-auto md:w-1/2 md:block">
								<img
									src="https://pagedone.io/asset/uploads/1695028873.png"
									alt="Header tailwind Section"
									className="h-full ml-auto object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="relative w-full h-auto">
						<div className="bg-indigo-500 rounded-2xl p-5  xl:p-8 h-full">
							<div className="block">
								<QuestionAnswerOutlinedIcon
									fontSize="large"
									className="text-white"
								/>
							</div>
							<h3 className="py-5 text-white text-lg font-bold xl:text-xl">Get Instant Help: Chatbot FAQ</h3>
							<p className="text-xs font-normal text-white mb-8">
								Our chatbot is here to help you with any questions you may have! Whether you're looking for store hours
								or products, our intelligent chatbot provides quick answers 24/7.
							</p>
							<button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
								Ask Question
								<svg
									width="6"
									height="10"
									viewBox="0 0 6 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
										stroke="white"
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
