import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import Owners from "../components/Owners";
function Homepage() {
	return (
		<>
			<Navbar/>
			<Hero />
			
			<Schedule />
			<Owners/>
			<Footer />
			
		</>
	);
}

export default Homepage;
