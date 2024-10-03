import { useState } from "react";import Chatbot from "./Chatbot";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
function Fab() {
	const [isChatBotOpen, setChatBotOpen] = useState(false);

	// Toggle function to open/close the chatbot
	const toggleChatBot = () => {
		setChatBotOpen((prev) => !prev); // Toggle the state
	};

	return (
		<>
			<div
				onClick={toggleChatBot} // Use the toggle function here
				className="fixed bg-green-700 p-4 bottom-8 right-8 text-white rounded-full shadow-xl animate-bounce cursor-pointer">
				<HelpOutlineOutlinedIcon fontSize="large" />
			</div>
			<Chatbot
				isChatBotOpen={isChatBotOpen}
				setIsOpen={setChatBotOpen}
			/>{" "}
			{/* Pass the setter function here */}
		</>
	);
}

export default Fab;
