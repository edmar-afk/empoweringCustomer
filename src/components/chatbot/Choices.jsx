/* eslint-disable no-unused-vars *//* eslint-disable react/prop-types */import { useState, useRef, useEffect } from "react";import { questions } from "../../assets/data";import api from "../../assets/api";import Sender from "../chatbot/Sender";import Receiver from "../chatbot/Receiver";
import SendIcon from "@mui/icons-material/Send";

function Choices({ animate }) {
	const [conversation, setConversation] = useState([]); // State to store conversation
	const [inputMessage, setInputMessage] = useState(""); // State for the input field
	const [loading, setLoading] = useState(false); // Loading state for bot response
	const [errorMessage, setErrorMessage] = useState(""); // Error message state
	const bottomRef = useRef(null); // Reference for the bottom of the conversation

	const handleQuestionClick = async (question) => {
		const timeSent = new Date().toLocaleTimeString(); // Get current time

		// Add the user's question to the conversation
		setConversation((prevConversation) => [...prevConversation, { type: "user", content: question, timeSent }]);

		setLoading(true); // Start loading state for bot response
		setErrorMessage(""); // Clear any previous error message

		try {
			// No Authorization header needed
			const result = await api.post("/api/chatbot/", { question });

			// Add the bot's response to the conversation with time sent
			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: result.data.answer, timeSent: new Date().toLocaleTimeString() },
			]);
		} catch (error) {
			console.error(error);
			setErrorMessage("Failed to fetch bot response. Please try again.");
			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: "Error fetching response", timeSent: new Date().toLocaleTimeString() },
			]);
		} finally {
			setLoading(false); // End loading state
		}
	};

	// Handle sending the message from the input field
	const handleSendMessage = () => {
		if (inputMessage.trim()) {
			handleQuestionClick(inputMessage); // Reuse the same logic for input field submission
			setInputMessage(""); // Clear the input field after sending
		}
	};

	// Scroll to the bottom when the conversation updates
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [conversation]);

	return (
		<>
			<div className="relative">
				{/* Display the conversation between user and bot */}
				<div className="conversation-stack flex flex-col overflow-y-scroll mb-6 pt-14 h-[60vh]">
					<div className="">
						<p className="p-4 font-bold">Frequently Asked Questions</p>
						<div className="mb-4 overflow-x-auto">
							<div className="flex flex-row flex-wrap items-start overflow-x-hidden w-full">
								{questions.map((question, index) => (
									<p
										key={index}
										className="faq-question break-words text-xs bg-green-900 text-white rounded-full mx-2 px-3 py-2 mb-3 cursor-pointer"
										onClick={() => handleQuestionClick(question.question)}>
										{question.question}
									</p>
								))}
							</div>
						</div>
					</div>
					{conversation.map((message, index) =>
						message.type === "user" ? (
							<Sender
								key={index}
								userQuestion={message.content}
								timeSent={message.timeSent} // Pass timeSent to Sender
							/>
						) : (
							<Receiver
								key={index}
								botResponse={message.content}
								timeSent={message.timeSent} // Pass timeSent to Receiver
							/>
						)
					)}
					{/* Invisible div to maintain scroll position */}
					<div ref={bottomRef} />
				</div>

				{/* Display error message if any */}
				{errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

				{/* Display loading indicator when the bot is processing */}
				{loading && <p className="text-green-500 text-center mb-4">Bot is thinking...</p>}

				{/* Input field for sending message */}
				<div className="sticky bottom-4 w-[95%] mx-auto bg-white flex px-1 py-1 border border-green-500 rounded-full overflow-hidden font-[sans-serif]">
					<input
						type="text"
						placeholder="Ask me..."
						className="w-full outline-none bg-white pl-4 text-sm"
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)} // Update input field
						onKeyPress={(e) => {
							if (e.key === "Enter") handleSendMessage(); // Send message on Enter
						}}
					/>
					<button
						type="button"
						className="bg-white transition-all text-white text-sm px-2 py-2.5"
						onClick={handleSendMessage} // Send message on click
					>
						<SendIcon className="text-green-600" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Choices;
