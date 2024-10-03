import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import Owners from "../components/Owners";
import Fab from "../components/Fab";
function Homepage() {
	return (
		<>
			<Navbar/>
			<Hero />
			
			<Schedule />
			<Owners/>
			<Footer />
			<Fab/>
		</>
	);
}

export default Homepage;
