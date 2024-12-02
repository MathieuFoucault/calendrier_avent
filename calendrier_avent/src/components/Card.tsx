import { Link } from "react-router-dom";
import "./Card.css";

type CardProps = {
	id: number;
	cardStyle: string;
};

const Card = ({ id, cardStyle }: CardProps) => {
	return (
		<Link to={`/algorithm/${id}`} className={`card ${cardStyle}`}>
			{id}
		</Link>
	);
};

export default Card;
