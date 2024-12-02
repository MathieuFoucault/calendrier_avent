import algos from "../data/algos.json";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="homepage">
			<Header />
			<div className="grid-container">
				{algos.map((algo, index) => (
					<Card key={algo.id} id={algo.id} cardStyle={`card${index + 1}`} />
				))}
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;
