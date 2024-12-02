import { useState } from "react";
import algos from "../data/algos.json";
import "./Algorithm.css";

type AlgorithmProps = {
	id: number;
};

const Algorithm = ({ id }: AlgorithmProps) => {
	const algo = algos.find((a) => a.id === id);
	const [showSolution, setShowSolution] = useState(false);
	const [userSolution, setUserSolution] = useState("");
	const [result, setResult] = useState<string | null>(null);

	if (!algo) {
		return <div>Algo non trouvé</div>;
	}

	const validateSolution = () => {
		if (userSolution.trim() === algo.solution.trim()) {
			setResult("Solution correcte !");
		} else {
			setResult("Solution incorrecte. Essayez encore !");
		}
	};

	return (
		<div className="algorithm">
			<div className="algorithm-content">
				<div className="algorithm-description">
					<h3 style={{ whiteSpace: "pre-line" }}>{algo.description}</h3>

					<p className="algoText">{algo.algorithm}</p>
					<button
						type="button"
						className="custom-btn btn-5"
						onClick={() => setShowSolution(true)}
					>
						Afficher la solution
					</button>
					{showSolution && <p>{algo.solution}</p>}
				</div>
				<div className="user-solution">
					<h3>Testez votre solution</h3>
					<textarea
						value={userSolution}
						onChange={(e) => setUserSolution(e.target.value)}
						placeholder="Écrivez votre solution ici..."
					/>
					<button
						type="button"
						className="custom-btn btn-5"
						onClick={validateSolution}
					>
						Valider
					</button>
					{result && <p>{result}</p>}
				</div>
			</div>
		</div>
	);
};

export default Algorithm;
