/* eslint-disable react/prop-types */import { motion, AnimatePresence } from "framer-motion";
import Choices from "./chatbot/Choices";
import Header from "./chatbot/Header";

const Chatbot = ({ isChatBotOpen, setIsOpen }) => {
	// Animation settings
	const variants = {
		hidden: { opacity: 1, y: -700 }, // Start hidden, below the final position
		visible: { opacity: 1, y: 0 }, // Final position
	};

	return (
		<AnimatePresence>
			{isChatBotOpen && (
				<motion.div
					className="fixed w-[350px] h-[600px] overflow-hidden bottom-0 sm:bottom-32 right-3 sm:right-8 bg-white z-50 shadow-2xl rounded-xl"
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={variants}
					transition={{ duration: 0.5, type: "spring", stiffness: 300 }} // Bounce effect
				>
					<Header setIsOpen={setIsOpen} /> {/* Pass the setter function to Header */}
					<Choices />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Chatbot;
