function Navbar() {	return (
		<>
			<header className="fixed top-0 left-0 py-6 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm z-50">
				<nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
					<a
						className="sm:order-1 flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
						href="#">
						Support Services
					</a>
					<div className="sm:order-3 flex items-center gap-x-2">
						<button
							type="button"
							className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-green-400 bg-white text-green-800 shadow-sm hover:bg-green-50 focus:outline-none focus:bg-green-50 disabled:opacity-50 disabled:pointer-events-none">
							Ask Question
						</button>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
