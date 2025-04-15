/* eslint-disable react/prop-types */ import LoyaltyIcon from "@mui/icons-material/Loyalty";
function ImageDisplay({ imageUrl, storeName, productName, description }) {
	return (
		<div className="w-full max-w-[300px] border border-green-200 bg-gray-100 rounded-lg shadow-lg mb-12">
			<div className="flex justify-center">
				<img
					className="p-8 rounded-t-lg"
					src={imageUrl}
					alt={productName}
				/>
			</div>
			<div className="px-5 pb-5">
				<a href="#"></a>
				<span className="text-xl font-bold text-gray-900">{productName}</span>
				<p
					className="text-gray-800 text-md py-3"
					dangerouslySetInnerHTML={{ __html: description }}></p>

				<div className="flex flex-row items-center justify-between">
					<h5 className="text-lg tracking-tight text-gray-900">{storeName}</h5>
					<LoyaltyIcon />
				</div>
			</div>
		</div>
	);
}

export default ImageDisplay;
