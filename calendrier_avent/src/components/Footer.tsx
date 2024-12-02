import "./Footer.css";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
	const links = [
		{
			icon: <Github size={24} />,
			text: "GitHub",
			url: "https://github.com/MathieuFoucault?tab=repositories",
		},
		{
			icon: <Linkedin size={24} />,
			text: "LinkedIn",
			url: "https://www.linkedin.com/in/mathieu-foucault-67b0aa31/",
		},
		{
			icon: <Mail size={24} />,
			text: "Email",
			url: "mailto:foucault.mathieu@free.fr",
		},
		{
			icon: <MessageCircle size={24} />,
			text: "Discord",
			url: "https://discord.com/users/MathieuFoucault",
		},
	];

	return (
		<footer className="footer">
			<section id="contact" className="contact">
				<div className="contact-buttons">
					{links.map((link, index) => (
						<a
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							href={link.url}
							className="contact-button"
							rel="noopener noreferrer"
							target="_blank"
						>
							{link.icon}
							<span>{link.text}</span>
						</a>
					))}
				</div>
			</section>
			<p>©2024 Foucault Mathieu | Tous droits réservés</p>
		</footer>
	);
}
