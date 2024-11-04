import { useEffect, useState } from "react";import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/img/Picture1.png";
import img2 from "../../assets/img/Picture2.png";
import img3 from "../../assets/img/Picture3.png";
import img4 from "../../assets/img/Picture4.png";
import img5 from "../../assets/img/Picture5.png";
import img6 from "../../assets/img/Picture6.png";

const images = [
	{ id: 1, src: img1, name: "Image 1" },
	{ id: 2, src: img2, name: "Image 2" },
	{ id: 3, src: img3, name: "Image 3" },
	{ id: 4, src: img4, name: "Image 4" },
	{ id: 5, src: img5, name: "Image 5" },
	{ id: 6, src: img6, name: "Image 6" },
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
		<div className="relative w-full h-screen overflow-hidden">
			<AnimatePresence>
				{images.map(
					(image, index) =>
						index === currentImageIndex && (
							<motion.img
								key={image.id}
								src={image.src}
								alt={image.name}
								className="absolute top-0 w-full h-full object-contain"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 1 }}
							/>
						)
				)}
			</AnimatePresence>
		</div>
	);
}

export default HeroCarousel;
