/* eslint-disable react/prop-types */ import { useState, useRef, useEffect } from "react";
import { questions, support } from "../../assets/data";
import api from "../../assets/api";
import Sender from "../chatbot/Sender";
import Receiver from "../chatbot/Receiver";
import SendIcon from "@mui/icons-material/Send";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function Choices() {
	const [conversation, setConversation] = useState([]); // Store conversation
	const [inputMessage, setInputMessage] = useState(""); // Input field state
	const [, setLoading] = useState(false); // Loading state
	const [errorMessage, setErrorMessage] = useState(""); // Error message state
	const [matchedSupport, setMatchedSupport] = useState(null); // Store matched support data
	const [showMatchedSupport, setShowMatchedSupport] = useState(false); // Toggle matched support display
	const [showFaqs, setShowFaqs] = useState(true); // Control FAQ section visibility
	const bottomRef = useRef(null); // Ref for bottom of conversation

	const normalizeText = (text) => {
		return text
			.replace(/₱/g, "P")
			.replace(/â‚±/g, "₱")
			.toLowerCase()
			.replace(/\n/g, " | ") // Normalize new lines to pipe characters
			.trim();
	};

	const handleQuestionClick = async (question) => {
		const timeSent = new Date().toLocaleTimeString();
		setConversation((prevConversation) => [...prevConversation, { type: "user", content: question, timeSent }]);
		setLoading(true);
		setErrorMessage("");
		setShowFaqs(false); // Hide FAQs after clicking

		try {
			const result = await api.post("/api/chatbot/", { question });
			const botResponse = result.data.answer;

			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: botResponse, timeSent: new Date().toLocaleTimeString() },
			]);

			const normalizedBotResponse = normalizeText(botResponse);
			let matched = support.find((item) => normalizedBotResponse.includes(normalizeText(item.trigger)));

			if (!matched) {
				matched = support.find((item) => item.trigger === "Default FAQs");
			}

			setTimeout(() => {
				setMatchedSupport(matched);
				setShowMatchedSupport(true);
				bottomRef.current?.scrollIntoView({ behavior: "smooth" });
			}, 3000);
		} catch (error) {
			console.error(error);
			setErrorMessage("Failed to fetch bot response. Please try again.");
			setConversation((prevConversation) => [
				...prevConversation,
				{ type: "bot", content: "Error fetching response", timeSent: new Date().toLocaleTimeString() },
			]);
		} finally {
			setLoading(false);
		}
	};

	const handleSendMessage = () => {
		if (inputMessage.trim()) {
			handleQuestionClick(inputMessage);
			setInputMessage("");
		}
	};

	const handleSupportQuestionClick = (question) => {
		handleQuestionClick(question);
		setShowMatchedSupport(false);
	};

	const handleHideMatchedSupport = () => {
		setShowMatchedSupport(false);
	};

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [conversation]);

	return (
		<>
			<div className="relative">
				<div className="conversation-stack flex flex-col overflow-y-scroll mb-6 pt-44 h-[55vh]">
					{conversation.map((message, index) =>
						message.type === "user" ? (
							<Sender
								key={index}
								userQuestion={message.content}
								timeSent={message.timeSent}
							/>
						) : (
							<Receiver
								key={index}
								botResponse={message.content}
								timeSent={message.timeSent}
							/>
						)
					)}

					

					{showFaqs && (
						<div className="h-44 flex flex-col mt-auto justify-end bg-white">
							<p className="p-4 font-bold">Frequently Asked Questions</p>
							<div className="mb-4 overflow-x-auto">
								<div className="flex flex-row flex-wrap items-start overflow-x-hidden w-full overflow-y-scroll">
									{questions.map((question, index) => (
										<p
											key={index}
											className="faq-question break-words text-[10px] bg-green-900 text-white rounded-lg mx-2 px-3 py-2 mb-0.5 cursor-pointer"
											onClick={() => handleQuestionClick(question.question)}>
											{question.question}
										</p>
									))}
								</div>
							</div>
						</div>
					)}

					<div ref={bottomRef} />
				</div>

				{errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

				{matchedSupport && showMatchedSupport && (
					<div className="bg-gray-50 p-4 rounded-lg mt-5 bottom-4 sticky h-44 overflow-y-scroll">
						<div className="flex flex-row justify-between items-center text-gray-600 bg-gray-100 sticky -top-4 pb-4 pt-4">
							<h4 className="text-xs font-semibold mb-2">You might also ask</h4>
							<p
								className="cursor-pointer text-red-600 hover:underline"
								onClick={handleHideMatchedSupport}>
								<CancelOutlinedIcon />
							</p>
						</div>
						<ul className="list-none ml-6 mt-2 flex justify-start flex-wrap">
							{matchedSupport.questions.map((q) => (
								<li
									key={q.id}
									className="cursor-pointer text-xs text-gray-900 hover:underline bg-green-50 my-1 py-1.5 px-3 rounded-md"
									onClick={() => handleSupportQuestionClick(q.question)}>
									{q.question}
								</li>
							))}
						</ul>
					</div>
				)}

				<div className="sticky bottom-4 w-[95%] mx-auto bg-white flex px-1 py-1 border border-green-500 rounded-full overflow-hidden font-[sans-serif]">
					<input
						type="text"
						placeholder="Ask me..."
						className="w-full outline-none bg-white pl-4 text-sm"
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === "Enter") handleSendMessage();
						}}
					/>
					<button
						type="button"
						className="bg-white transition-all text-white text-sm px-2 py-2.5"
						onClick={handleSendMessage}>
						<SendIcon className="text-green-600" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Choices;
