import bingocornbeef from "../assets/img/products/cornedbeef/bingoCornedbeef.png";import star from "../assets/img/products/cornedbeef/star.png";
import holiday from "../assets/img/products/cornedbeef/holiday.jpg";
import argentina from "../assets/img/products/cornedbeef/argentina.jpg";
import pureFoods from "../assets/img/products/cornedbeef/pureFoods.jpg";
const products = [
	{
		id: 1,
		triggerQuestion: "Showing Corned Beef Category",
		answers: [
			{
				id: 1,
				productName: "Bingo Corned Beef (100grams) per dozen",
				description: "<b>Big B:</b> ₱198.00<br><b>Joemar's Grocery:</b> ₱210.50<br><b>Mejos Store:</b> ₱225.00",
				imageUrl: bingocornbeef,
			},
			{
				id: 2,
				productName: "Star Corned Beef (100grams) per dozen",
				description: "<b>Big B:</b> ₱220.00<br><b>Joemar's Grocery:</b> ₱234.75<br><b>Mejos Store:</b> ₱248.00",
				imageUrl: star,
			},
			{
				id: 3,
				productName: "Argentina Corned Beef (100grams) per dozen",
				description: "<b>Big B:</b> ₱216.00<br><b>Joemar's Grocery:</b> ₱229.50<br><b>Mejos Store:</b> ₱243.00",
				imageUrl: argentina,
			},
			{
				id: 4,
				productName: "Holiday Corned Beef (100grams) per dozen",
				description: "<b>Big B:</b> ₱214.20<br><b>Joemar's Grocery:</b> ₱228.00<br><b>Mejos Store:</b> ₱239.75",
				imageUrl: holiday,
			},
			{
				id: 5,
				productName: "Pure Foods Corned Beef (100grams) per dozen",
				description: "<b>Big B:</b> ₱225.00<br><b>Joemar's Grocery:</b> ₱239.00<br><b>Mejos Store:</b> ₱252.50",
				imageUrl: pureFoods,
			},
		],
	},
];

export { products };
