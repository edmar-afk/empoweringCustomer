/* eslint-disable react/prop-types *//* eslint-disable react/no-unescaped-entities */
import CancelIcon from "@mui/icons-material/Cancel";

function Header({ setIsOpen }) {
	return (
		<div className="sticky top-0 border-b-2 w-[350px] flex flex-row p-4 sm:p-6 shadow-lg bg-green-50/90 backdrop-blur-2xl z-50">
			<p className="text-xl font-bold">Bryne's Assistant</p>
			<CancelIcon
				fontSize="medium"
				className="cursor-pointer ml-auto text-gray-700" // Optional: Add spacing and cursor pointer
				onClick={() => setIsOpen(false)} // Close the chatbot when clicked
			/>
		</div>
	);
}

export default Header;
