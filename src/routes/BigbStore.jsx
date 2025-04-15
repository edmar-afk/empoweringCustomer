import Heading from "../components/Heading";import Navbar from "../components/Navbar";import ProductsCard from "../components/ProductsCard";import Search from "../components/Search";import Fab from "../components/Fab";
import bigbvideo from "../assets/videos/bigb.mp4";
import { products } from "../assets/display";

function BigbStore() {
	return (
		<>
			<Navbar />
			<Heading
				storeName={"BIG B ENTERPRISES"}
				video={bigbvideo}
			/>
			<div className="flex items-center p-12">
				<p className="text-gray-800 font-bold text-4xl my-12">What&apos;s inside Our Store</p>
			</div>
			<div className="flex flex-row flex-wrap justify-evenly items-center">
				{products.map((product, index) => (
					<ProductsCard
						key={index}
						productName={product.name}
						image={product.imageUrl}
					/>
				))}
			</div>
			<Fab />
		</>
	);
}

export default BigbStore;
