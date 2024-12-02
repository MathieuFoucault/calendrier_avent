import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AlgorithmPage from "../pages/AlgorithmPage";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/algorithm/:id" element={<AlgorithmPage />} />
		</Routes>
	);
};

export default Router;
