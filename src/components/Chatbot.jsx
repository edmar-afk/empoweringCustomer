/* eslint-disable react/prop-types */ import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Choices from "./chatbot/Choices";
import Header from "./chatbot/Header";

const Chatbot = ({ isChatBotOpen, setIsOpen }) => {
	const chatbotRef = useRef(null);

	// Close chatbot when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		if (isChatBotOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isChatBotOpen, setIsOpen]);

	// Animation settings
	const variants = {
		hidden: { opacity: 1, y: -1200 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<AnimatePresence>
			{isChatBotOpen && (
				<motion.div
					ref={chatbotRef}
					className="fixed w-[350px] sm:w-[500px] h-[600px] sm:h-[600px] overflow-hidden bottom-0 right-3 sm:right-8 bg-white z-50 shadow-2xl rounded-xl"
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={variants}
					transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}>
					<Header setIsOpen={setIsOpen} />
					<Choices />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Chatbot;
