import bingocornbeef from "../assets/img/products/cornedbeef/bingoCornedbeef.png";import star from "../assets/img/products/cornedbeef/star.png";import holiday from "../assets/img/products/cornedbeef/holiday.jpg";import argentina from "../assets/img/products/cornedbeef/argentina.jpg";import pureFoods from "../assets/img/products/cornedbeef/pureFoods.jpg";import chilimansi from "../assets/img/products/pancitcanton/chilimansi.jpg";import hotChili from "../assets/img/products/pancitcanton/hotChili.jpg";import kalamansi from "../assets/img/products/pancitcanton/kalamansi.jpg";import original from "../assets/img/products/pancitcanton/original.jpg";import sweetSpicy from "../assets/img/products/pancitcanton/sweetSpicy.jpg";const products = [	{
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
	{
		id: 2,
		triggerQuestion: "Showing Pancit Canton Category",
		answers: [
			{
				id: 1,
				productName: "Lucky Me! Pancit Canton Original (65g) per dozen",
				description: "<b>Big B:</b> ₱132.00<br><b>Joemar's Grocery:</b> ₱138.50<br><b>Mejos Store:</b> ₱145.00",
				imageUrl: original,
			},
			{
				id: 2,
				productName: "Lucky Me! Pancit Canton Kalamansi (65g) per dozen",
				description: "<b>Big B:</b> ₱135.00<br><b>Joemar's Grocery:</b> ₱142.75<br><b>Mejos Store:</b> ₱149.00",
				imageUrl: kalamansi,
			},
			{
				id: 3,
				productName: "Lucky Me! Pancit Canton Chilimansi (65g) per dozen",
				description: "<b>Big B:</b> ₱136.00<br><b>Joemar's Grocery:</b> ₱144.50<br><b>Mejos Store:</b> ₱151.00",
				imageUrl: chilimansi,
			},
			{
				id: 4,
				productName: "Lucky Me! Pancit Canton Extra Hot (65g) per dozen",
				description: "<b>Big B:</b> ₱137.20<br><b>Joemar's Grocery:</b> ₱145.00<br><b>Mejos Store:</b> ₱153.75",
				imageUrl: hotChili,
			},
			{
				id: 5,
				productName: "Lucky Me! Pancit Canton Sweet & Spicy (65g) per dozen",
				description: "<b>Big B:</b> ₱134.00<br><b>Joemar's Grocery:</b> ₱141.00<br><b>Mejos Store:</b> ₱147.50",
				imageUrl: sweetSpicy,
			},
		],
	},
	{
		id: 3,
		triggerQuestion: "Showing Toothpaste Category",
		answers: [
			{
				id: 1,
				productName: "Colgate Naturals Extracts with Lemon Oil (100g)",
				description: "<b>Big B:</b> ₱89.00<br><b>Joemar's Grocery:</b> ₱94.50<br><b>Mejos Store:</b> ₱99.00",
				imageUrl: "https://www.innovaonline.sa/uploads/products/original/1009109.webp",
			},
			{
				id: 2,
				productName: "Hapee Fresh & Cool White Toothpaste (100g)",
				description: "<b>Big B:</b> ₱68.00<br><b>Joemar's Grocery:</b> ₱72.00<br><b>Mejos Store:</b> ₱75.00",
				imageUrl:
					"https://www.lamoiyan.com/wp-content/uploads/2019/06/hapee-toothpaste_fresh-cool-white_150mL-carton-1.jpg",
			},
			{
				id: 3,
				productName: "Sensodyne Freshmint Toothpaste (100g)",
				description: "<b>Big B:</b> ₱114.00<br><b>Joemar's Grocery:</b> ₱119.50<br><b>Mejos Store:</b> ₱125.00",
				imageUrl:
					"https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/sensodyne-v2/en_US/Product-pages/products/desktop/sensodyne-fresh-mint-toothpaste-thumb-01.jpg?auto=format",
			},
			{
				id: 4,
				productName: "Sensodyne Repair & Protect Toothpaste (100g)",
				description: "<b>Big B:</b> ₱233.00<br><b>Joemar's Grocery:</b> ₱239.00<br><b>Mejos Store:</b> ₱245.00",
				imageUrl:
					"https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/sensodyne-v2/en_US/Product-pages/products/desktop/sensodyne-repair-protect-mint3.png?auto=format",
			},
			{
				id: 5,
				productName: "Colgate Visible White Toothpaste (100g)",
				description: "<b>Big B:</b> ₱110.00<br><b>Joemar's Grocery:</b> ₱115.00<br><b>Mejos Store:</b> ₱120.00",
				imageUrl:
					"https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/en-in/general/colgate-visible-white/colgate-visible-white-1.png",
			},
		],
	},
	{
		id: 4,
		triggerQuestion: "Showing Soap Category",
		answers: [
			{
				id: 1,
				productName: "Dove Beauty Bar (100g)",
				description: "<b>Big B:</b> ₱50.00<br><b>Joemar's Grocery:</b> ₱55.00<br><b>Mejos Store:</b> ₱58.00",
				imageUrl: "https://medias.watsons.com.ph/publishing/WTCPH-10042993-back-zoom.jpg?version=1720807288",
			},
			{
				id: 2,
				productName: "Safeguard Pure White Soap (90g)",
				description: "<b>Big B:</b> ₱30.00<br><b>Joemar's Grocery:</b> ₱33.50<br><b>Mejos Store:</b> ₱36.00",
				imageUrl:
					"https://k2pharmacy.ph/cdn/shop/files/SafeguardPurewhite130g_batcheditor_fotor_grande.jpg?v=1730970042",
			},
			{
				id: 3,
				productName: "Lifebuoy Soap (90g)",
				description: "<b>Big B:</b> ₱28.00<br><b>Joemar's Grocery:</b> ₱32.00<br><b>Mejos Store:</b> ₱35.00",
				imageUrl: "https://m.media-amazon.com/images/I/61TzCC94qhL._SL1000_.jpg",
			},
			{
				id: 4,
				productName: "Pears Transparent Soap (100g)",
				description: "<b>Big B:</b> ₱40.00<br><b>Joemar's Grocery:</b> ₱43.00<br><b>Mejos Store:</b> ₱46.00",
				imageUrl: "https://m.media-amazon.com/images/I/71uIUAOJOeL._SL1500_.jpg",
			},
			{
				id: 5,
				productName: "Human Nature Sunflower Beauty Bar (135g)",
				description: "<b>Big B:</b> ₱135.00<br><b>Joemar's Grocery:</b> ₱140.00<br><b>Mejos Store:</b> ₱145.00",
				imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrAEjz-gl1T5B77Q2EVpIw7ozkWHmuGO6nw&s",
			},
			{
				id: 6,
				productName: "Olay Moisturizing Bar Soap (90g)",
				description: "<b>Big B:</b> ₱70.00<br><b>Joemar's Grocery:</b> ₱75.00<br><b>Mejos Store:</b> ₱80.00",
				imageUrl: "https://m.media-amazon.com/images/I/71MkctR0BMS._SL1500_.jpg",
			},
			{
				id: 7,
				productName: "Cetaphil Gentle Cleansing Bar Soap (127g)",
				description: "<b>Big B:</b> ₱195.00<br><b>Joemar's Grocery:</b> ₱210.00<br><b>Mejos Store:</b> ₱220.00",
				imageUrl:
					"https://www.cetaphil.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw2b1b1fc0/081828_GC_Bar_4-5oz%20Carton%20-%20front.PNG",
			},
			{
				id: 8,
				productName: "Palmolive Naturals Soap with Milk (135g)",
				description: "<b>Big B:</b> ₱60.00<br><b>Joemar's Grocery:</b> ₱65.00<br><b>Mejos Store:</b> ₱70.00",
				imageUrl:
					"https://www.palmolive.ph/content/dam/cp-sites/personal-care/palmolive-eu/en_ph/images/bar-soap/palmolive-naturals-white-with-100-percent-natural-milk-protein-bar-soap.jpg",
			},
			{
				id: 9,
				productName: "Nivea Creme Soap (100g)",
				description: "<b>Big B:</b> ₱55.00<br><b>Joemar's Grocery:</b> ₱59.00<br><b>Mejos Store:</b> ₱62.00",
				imageUrl: "https://www.manilagrocerystore.com/images/detailed/7/Nivea_Creme_Soft_Creme_100g.jpg",
			},
			{
				id: 10,
				productName: "Sunsilk Lush & Smooth Soap (100g)",
				description: "<b>Big B:</b> ₱45.00<br><b>Joemar's Grocery:</b> ₱50.00<br><b>Mejos Store:</b> ₱53.00",
				imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiQfcmizWpDAQbcEcV53tChEl1EJicuSCnA&s",
			},
		],
	},
];

export { products };
