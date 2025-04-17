/* eslint-disable react/prop-types */
import { Modal, Box } from "@mui/material";
import video from "../../assets/videos/mejos.mp4";
function MejosModal({ open, handleClose }) {
	return (
		<Modal
			open={open}
			onClose={handleClose}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "70%",
					bgcolor: "background.paper",
					borderRadius: 2,
					boxShadow: 24,
					p: 4,
				}}>
				<p className="font-bold text-2xl">Inside of Mejos Store</p>
				<video
					className="w-full h-full rounded-2xl mt-8"
					autoPlay
					loop
					muted
					playsInline>
					<source
						src={video}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</Box>
		</Modal>
	);
}

export default MejosModal;
