/* eslint-disable react/no-unescaped-entities */ import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import shop from "../assets/svg/owners.svg";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function Schedule() {
	return (
		<>
			<div
				className="mt-24 bg-gray-900"
				id="pricing">
				<div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center pt-12">
						<h1 className="text-base font-semibold leading-7 text-green-400">Opening Hours</h1>
						<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
							Shop When You Need: Opening Times
						</p>
					</div>
					<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
						<LocationOnOutlinedIcon />
						Poblacion, Bayog Zamboanga Del Sur
					</p>
					<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						<div className="relative ring-1 ring-green-500 rounded-3xl p-8 xl:p-10">
							<img
								src={shop}
								alt=""
								className="absolute -z-50 w-32 sm:w-44 bottom-0 right-0"
							/>
							<div className="flex justify-between items-center gap-x-4">
								<h2
									id="product2"
									className="text-xl font-semibold leading-8 text-white">
									Opening Hour
								</h2>
								<p className="rounded-full bg-green-500 p-3 text-xs font-semibold leading-5 text-white">
									<StorefrontOutlinedIcon />
								</p>
							</div>

							<div className="mt-6 flex flex-col items-baseline gap-x-1">
								<p className="text-green-200 font-extralight mb-2">
									<MapOutlinedIcon /> Purok 11 Bayog ZDS
								</p>
								<span className="text-4xl font-bold tracking-tight text-white">BIG B ENTERPRISES</span>
							</div>
							<hr
								className="border-none bg-green-500 w-24 mt-2 rounded-full"
								style={{ height: "8px" }}
							/>

							<ul
								role="list"
								className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
								<li className="flex gap-x-3">
									<AccessTimeOutlinedIcon />
									Opens at 7:00 A.M.
								</li>
								<li className="flex gap-x-3">
									<AccessTimeOutlinedIcon />
									Closes at 7:00 P.M.
								</li>
								<li className="flex gap-x-3 text-green-400 font-bold">
									<CalendarMonthOutlinedIcon />
									Opens 24/7
								</li>
							</ul>
						</div>

						<div className="relative ring-1 ring-green-500 rounded-3xl p-8 xl:p-10">
							<img
								src={shop}
								alt=""
								className="absolute -z-50 w-32 sm:w-44 bottom-0 right-0"
							/>
							<div className="flex justify-between items-center gap-x-4">
								<h2
									id="product2"
									className="text-xl font-semibold leading-8 text-white">
									Opening Hour
								</h2>
								<p className="rounded-full bg-green-500 p-3 text-xs font-semibold leading-5 text-white">
									<StorefrontOutlinedIcon />
								</p>
							</div>

							<div className="mt-6 flex flex-col gap-x-1">
								<p className="text-green-200 font-extralight mb-2">
									<MapOutlinedIcon /> Purok 6 Bayog ZDS
								</p>
								<span className="text-4xl font-bold tracking-tight text-white">MEJOS STORE</span>
							</div>
							<hr
								className="border-none bg-green-500 w-24 mt-2 rounded-full"
								style={{ height: "8px" }}
							/>
							<ul
								role="list"
								className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
								<li className="flex gap-x-3">
									<AccessTimeOutlinedIcon />
									Opens at 7:00 A.M.
								</li>
								<li className="flex gap-x-3">
									<AccessTimeOutlinedIcon />
									Closes at 7:00 P.M.
								</li>
								<li className="flex gap-x-3 text-green-400 font-bold">
									<CalendarMonthOutlinedIcon />
									Opens Everyday <br /> except Saturday
								</li>
							</ul>
						</div>

						<div className="relative ring-1 ring-green-500 rounded-3xl p-8 xl:p-10">
							<img
								src={shop}
								alt=""
								className="absolute -z-50 w-32 sm:w-44 bottom-0 right-0"
							/>
							<div className="flex justify-between items-center gap-x-4">
								<h2
									id="product2"
									className="text-xl font-semibold leading-8 text-white">
									Opening Hour
								</h2>
								<p className="rounded-full bg-green-500 p-3 text-xs font-semibold leading-5 text-white">
									<StorefrontOutlinedIcon />
								</p>
							</div>

							<div className="mt-6 flex flex-col gap-x-1">
								<p className="text-green-200 font-extralight mb-2">
									<MapOutlinedIcon /> Purok 3 Bayog ZDS
								</p>
								<span className="text-4xl font-bold tracking-tight text-white">Joemar's Triple 8 Grocery</span>
							</div>
							<hr
								className="border-none bg-green-500 w-24 mt-2 rounded-full"
								style={{ height: "8px" }}
							/>
							<ul
								role="list"
								className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
								<li className="flex gap-x-3">
									<AccessTimeOutlinedIcon />
									Opens at 7:00 A.M.
								</li>
								<li className="flex gap-x-3">
									<AccessTimeOutlinedIcon />
									Closes at 7:00 P.M.
								</li>
								<li className="flex gap-x-3 text-green-400 font-bold">
									<CalendarMonthOutlinedIcon />
									Opens 24/7
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Schedule;
