/* eslint-disable react/prop-types */ import LoyaltyIcon from "@mui/icons-material/Loyalty";
function ProductsCard({ image, productName, description }) {
	return (
		<div className="w-full max-w-sm border border-green-200 bg-gray-100 rounded-lg shadow-lg mb-12">
			<a href="#">
				<img
					className="p-8 rounded-t-lg"
					src={image}
					alt={productName}
				/>
			</a>
			<div className="px-5 pb-5">
				<a href="#">
					<h5 className="text-xl font-semibold tracking-tight text-gray-900">{productName}</h5>
				</a>
				<p className="text-green-800 text-xs font-semibold  py-3 whitespace-pre-line">{description}</p>

				<div className="flex flex-row items-center justify-between">
					<span className="text-xl font-bold text-gray-900">Canned Foods</span>
					<LoyaltyIcon />
				</div>
			</div>
		</div>
	);
}

export default ProductsCard;
