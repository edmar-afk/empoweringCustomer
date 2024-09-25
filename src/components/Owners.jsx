/* eslint-disable react/no-unescaped-entities */ import shopOwner from "../assets/svg/shopowner.svg";function Owners() {	return (
	<>
		<div className="py-20 bg-gray-50">
			<div className="container mx-auto px-6 md:px-12 xl:px-32">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
						Spotlight on Our Valued Shop Owners
					</h2>
					<p className="text-gray-600 lg:w-8/12 lg:mx-auto">
						Contributing to the diverse marketplace we all enjoy. Contributing a special offerings that make each shop a
						distinct part of our vibrant community of Bayog."
					</p>
				</div>
				<div className="grid gap-12 items-center md:grid-cols-3">
					<div className="space-y-4 text-center">
						<img
							className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
							src={shopOwner}
							alt="owner"
							loading="lazy"
							width="640"
							height="805"
						/>
						<div>
							<h4 className="text-2xl">MARICHU BATERNA</h4>
							<span className="block text-sm text-gray-500">Owner of BIG B ENTERPRISES</span>
						</div>
					</div>
					<div className="space-y-4 text-center">
						<img
							className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
							src={shopOwner}
							alt="owner"
							loading="lazy"
							width="1000"
							height="667"
						/>
						<div>
							<h4 className="text-2xl">VIRGILIA MEJOS</h4>
							<span className="block text-sm text-gray-500">Owner of MEJOS STORE</span>
						</div>
					</div>
					<div className="space-y-4 text-center">
						<img
							className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
							src={shopOwner}
							alt="owner"
							loading="lazy"
							width="1000"
							height="667"
						/>
						<div>
							<h4 className="text-2xl">CHARILYN T. MALAQUE</h4>
							<span className="block text-sm text-gray-500">Owner of Joemar's Triple 8 Grocery</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);
}

export default Owners;
