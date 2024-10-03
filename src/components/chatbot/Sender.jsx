/* eslint-disable react/prop-types */ import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Sender({ userQuestion, timeSent }) {
	return (
		<>
			<div className="flex items-end gap-2 mb-3 mr-4">
				<div className="ml-auto flex max-w-[95%] flex-col gap-2 rounded-l-xl rounded-tr-xl bg-green-50 p-4 text-sm text-gray-800 break-words">
					{userQuestion}
					{/* <span className="ml-auto text-xs">{timeSent}</span> */}
				</div>
				<span className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-green-300 text-sm font-bold tracking-wider  bg-green-900 text-purple-300">
					<p className="text-white text-[8px]">You</p>
				</span>
			</div>
		</>
	);
}

export default Sender;
