/* eslint-disable react/prop-types */

function Heading({ storeName, video }) {
	return (
		<>
			<div className="relative w-full h-[500px] mt-24 flex flex-col items-center justify-center overflow-hidden bg-green-800/50">
				<video
					className="absolute top-0 left-0 w-full h-full object-cover -z-50"
					autoPlay
					loop
					muted
					playsInline>
					<source
						src={video}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
				{/* Green Overlay */}
				<div className="absolute top-0 left-0 w-full h-full bg-green-800/50"></div>
				{/* Content */}
				<div className="relative z-10 text-center">
					<p className="text-white font-bold text-7xl">{storeName}</p>
					<p className="text-white font-bold text-xl mt-4">Store Features</p>
				</div>
			</div>
		</>
	);
}

export default Heading;
