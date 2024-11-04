/* eslint-disable react/prop-types *//* eslint-disable react/no-unescaped-entities */

// eslint-disable-next-line no-unused-vars
function Receiver({ botResponse }) {
	// Split the botResponse by '|' and trim each part
	const responseLines = botResponse.split("|").map((line) => line.trim());

	return (
		<div className="flex items-end gap-2 mb-3 ml-4">
			<div className="mr-auto flex max-w-[95%] flex-col gap-2 p-4 bg-green-600 text-purple-300">
				<span className="font-semibold text-white">Chatbot -</span>
				<div className="max-w-xs text-sm text-white break-all">
					{responseLines.map((line, index) => (
						<div key={index}>{line}</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Receiver;
