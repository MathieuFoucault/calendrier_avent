import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
	const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 * 1000);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const formatTimeLeft = (milliseconds: number) => {
		const seconds = Math.floor((milliseconds / 1000) % 60);
		const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
		const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
		const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
		const pad = (num: number) => num.toString().padStart(2, "0");

		return `${pad(days)} Days ${pad(hours)} Hours ${pad(minutes)} Minutes ${pad(seconds)} Seconds`;
	};

	return (
		<header>
			<h1 className="headTiltle">Calendrier de l'avent</h1>
			<h2 className="headTiltle">{formatTimeLeft(timeLeft)}</h2>
		</header>
	);
};

export default Header;
