const questions = [
	{ id: 1, question: "How much is lucky me pancit canton if I buy one piece only?" },
	{ id: 2, question: "How much does it cost if I buy K-Blanca twin (1tie)?" },
	{ id: 3, question: "How much is Quickchow beef and chicken per dozen?" },
	{ id: 4, question: "How much is a case of 12oz Mountain Dew?" },
	{ id: 5, question: "How much is Colgate green and red per dozen?" },
	{ id: 6, question: "How much is litre coke per case?" },
	{ id: 7, question: "How much is a pack of frozen foods like hotdog?" },
	{ id: 8, question: "How much is your family sardines by dozen?" },
	{ id: 9, question: "How much is Sunsilk Shampoo in retail?" },
	{ id: 10, question: "How much is one twin pack of K-Blanca?" },
	{ id: 11, question: "How much is a dozen of junk foods?" },
	{ id: 12, question: "How much is litre coke per case?  " },
	{ id: 13, question: "Do you offer home delivery or curbside pickup and is there any fee?" },
	{ id: 14, question: "Do you have a return policy for perishable items if the quality doesn’t meet expectation?" },
	{ id: 15, question: "What are your store hours?" },
	{ id: 16, question: "Are there seasonal discounts or special deals on certain items?" },
];
const support = [
	{
		id: 1,
		trigger: "Joemar’s Triple & Grocery: 410.00 | Big B: 405.00 | Mejos Store: 400.00",
		questions: [
			{
				id: 1,
				question: "How much is 1.5 litre coke?",
			},
			{
				id: 2,
				question: "How much is Mismo coke?",
			},
			{
				id: 3,
				question: "How much is 12oz coke?",
			},
		],
	},
	{
		id: 2,
		trigger: "Joemar’s Triple & Grocery: 50.00 | Big B: 60.00 | Mejos Store: 55.00",
		questions: [
			{
				id: 1,
				question: "How much is 60pcs siomai beef and chicken? ",
			},
			{
				id: 2,
				question: "How much is one pack longganisa?",
			},
		],
	},
	{
		id: 3,
		trigger: "Joemar’s Triple & Grocery: 92.00 | Big B: 96.00 | Mejos Store: 94.00",
		questions: [
			{
				id: 1,
				question: "How about Lucky Me noodles?",
			},
		],
	},
	{
		id: 4,
		trigger: "Joemar’s Triple & Grocery: 108.00 | Big B: 108.00 | Mejos Store: 108.00",
		questions: [
			{
				id: 1,
				question: "What other toothpaste are available?",
			},
		],
	},
	{
		id: 5,
		trigger: "Joemar’s Triple & Grocery: 130.00 | Big B: 125.00 | Mejos Store: 125.00",
		questions: [
			{
				id: 1,
				question: "How about K-Blanca single (1tie)?",
			},
			{
				id: 2,
				question: "What other coffee’s are available?",
			},
		],
	},
	{
		id: 6,
		trigger: "Joemar’s Triple & Grocery: 74.00 | Big B: 76.00 | Mejos Store: 74.00",
		questions: [
			{
				id: 1,
				question: "What are other stock of shampoo do you have?",
			},
			{
				id: 2,
				question: "How much Palmolive per dozen?",
			},
			{
				id: 3,
				question: "How much Gard per dozen?",
			},
			{
				id: 4,
				question: "How much Clear per dozen?",
			},
		],
	},
	{
		id: 7,
		trigger:
			"Joemar’s Triple & Grocery: Palmolive, Gard, Head&Shoulder, Clear | Big B: Palmolive, Gard, Head&Shoulder, Clear | Mejos Store: Palmolive, Gard, Head&Shoulder, Clear",
		questions: [
			{
				id: 1,
				question: "How much Palmolive per dozen?",
			},
			{
				id: 2,
				question: "How much Gard per dozen?",
			},
			{
				id: 3,
				question: "How much Clear per dozen?",
			},
			{
				id: 4,
				question: "How much Clear per dozen?",
			},
		],
	},
	{
		id: 8,
		trigger:
			"Joemar’s Triple & Grocery: Surf, Wings, Pride, Tide, Ariel | Big B: Surf, Wings, Pride, Tide, Ariel | Mejos Store: Surf, Wings, Pride, Tide, Ariel",
		questions: [
			{
				id: 1,
				question: "How much is Surf per dozen?",
			},
			{
				id: 2,
				question: "How much is Wings per dozen?",
			},
			{
				id: 3,
				question: "How much is Pride per dozen?",
			},
			{
				id: 4,
				question: "How much is Ariel twin?",
			},
		],
	},
	{
		id: 9,
		trigger: "Joemar’s Triple & Grocery: 10.00 | Big B: 10.00 | Mejos Store: 10.00",
		questions: [
			{
				id: 1,
				question: "How much is one piece Close up?",
			},
			{
				id: 2,
				question: "How much is one piece of Hapee?",
			},
		],
	},
	{
		id: 5,
		trigger: "Default FAQs",
		questions: [
			{
				id: 1,
				question: "What laundry soap is available?",
			},
			{
				id: 2,
				question: "How much is litre coke per case?",
			},
			{
				id: 3,
				question: "How much is a pack of frozen foods like hotdog?",
			},
			{
				id: 4,
				question: "How much is Quickchow beef and chicken per dozen?",
			},
			{
				id: 5,
				question: "How much is Colgate green and red per dozen?",
			},
			{
				id: 6,
				question: "How much does it cost if I buy K-Blanca twin (1tie)?",
			},
			{
				id: 7,
				question: "How much per dozen of Sunsilk shampoo?",
			},
			{
				id: 8,
				question: "How much is one piece of Colgate?",
			},
		],
	},
];

export { questions, support };
