import { useParams } from "react-router-dom";
import Algorithm from "../components/Algorithm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AlgorithmPage.css";

const AlgorithmPage = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<div className="algorithm-page">
			<Header />
			{id && <Algorithm id={Number.parseInt(id)} />}
			<Footer />
		</div>
	);
};

export default AlgorithmPage;
