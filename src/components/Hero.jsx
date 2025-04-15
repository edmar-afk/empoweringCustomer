/* eslint-disable react/no-unescaped-entities */ import { Link } from "react-router-dom";
import HeroCarousel from "./homepage/HeroCarousel";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
function Hero() {
	return (
		<>
			<section className="pt-16 sm:pt-44 bg-white">
				<div className="px-4 mx-auto max-w-7xl">
					<div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
						<h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
							<span>Empowering</span>{" "}
							<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
								Customer Interactions
							</span>{" "}
							<span>Smart Chatbots in Support Services</span>
						</h1>
						<p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24"></p>
						<div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
							<Link to={'/bigB'} className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-green-600 hover:text-green-50 bg-green-50 hover:bg-green-700 duration-300 cursor-pointer rounded-2xl sm:w-auto sm:mb-0">
								<StoreOutlinedIcon />
								BIG B ENTERPRISES
							</Link>
							<div className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-green-600 hover:text-green-50 bg-green-50 hover:bg-green-700 duration-300 cursor-pointer rounded-2xl sm:w-auto sm:mb-0">
								<StoreOutlinedIcon />
								MEJOS STORE
							</div>
							<div className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-green-600 hover:text-green-50 bg-green-50 hover:bg-green-700 duration-300 cursor-pointer rounded-2xl sm:w-auto sm:mb-0">
								<StoreOutlinedIcon />
								Joemar's Triple 8 Grocery
							</div>
						</div>
					</div>
					<div className="w-full mx-auto mt-20 text-center md:w-10/12">
						<div className="relative z-0 w-full mt-8">
							<div className="relative overflow-hidden shadow-2xl">
								<div className="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl">
									<div className="flex space-x-1.5">
										<div className="w-3 h-3 border-2 border-white rounded-full"></div>
										<div className="w-3 h-3 border-2 border-white rounded-full"></div>
										<div className="w-3 h-3 border-2 border-white rounded-full"></div>
									</div>
								</div>
								<HeroCarousel />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
