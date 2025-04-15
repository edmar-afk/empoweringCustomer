/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import ImageDisplay from "./ImageDisplay";
import { products } from "../../assets/display";

function Receiver({ botResponse }) {
	const responseLines = botResponse.split("|").map((line) => line.trim());

	
	const matchedProduct = products.find((product) => product.triggerQuestion === botResponse);

	return (
		<div className="flex flex-col ml-4 mb-3">
			<div className="mr-auto flex max-w-[95%] flex-col gap-2 p-4 bg-green-600 text-purple-300">
				<span className="font-semibold text-white">Chatbot -</span>
				<div className="max-w-xs text-sm text-white break-all">
					{responseLines.map((line, index) => (
						<div key={index}>{line}</div>
					))}
				</div>
			</div>

			{matchedProduct && (
				<div className="mt-8">
					{matchedProduct.answers.map((answer, index) => (
						<ImageDisplay
							key={index}
							storeName={matchedProduct.storeName}
							imageUrl={answer.imageUrl}
							description={answer.description}
							productName={answer.productName}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Receiver;
