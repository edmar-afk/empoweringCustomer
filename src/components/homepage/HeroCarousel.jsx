import { useEffect, useState } from "react";import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.jpeg";
import img3 from "../../assets/img/3.jpeg";

const images = [
	{
		id: 1,
		src: img1,
		name: "Image 1",
	},
	{
		id: 2,
		src: img2,
		name: "Image 2",
	},
	{
		id: 3,
		src: img3,
		name: "Image 3",
	},
];

function HeroCarousel() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000); // 5 seconds delay

		return () => clearInterval(interval); // Clean up on component unmount
	}, []);

	return (
		<div className="relative w-full h-[550px] overflow-hidden">
			<AnimatePresence>
				{images.map(
					(image, index) =>
						index === currentImageIndex && (
							<motion.img
								key={image.id}
								src={image.src}
								alt={image.name}
								className="absolute w-full h-full object-cover"
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 1.05 }}
								transition={{ duration: 1 }}
							/>
						)
				)}
			</AnimatePresence>
		</div>
	);
}

export default HeroCarousel;
