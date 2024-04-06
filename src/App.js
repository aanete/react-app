import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<Weather defaultCity="Oslo" />
			<footer>
				This project was coded by{" "}
				<a
					href="https://github.com/aanete"
					target="_blank"
					rel="noreferrer"
					className="footer-link"
				>
					Anete Alksne
				</a>{" "}
				and is open-sourced on{" "}
				<a
					href="https://github.com/aanete/react-app"
					target="_blank"
					rel="noreferrer"
					className="footer-link"
				>
					GitHub
				</a>{" "}
				and hosted on{" "}
				<a
					href="https://www.netlify.com/"
					target="_blank"
					rel="noreferrer"
					className="footer-link"
				>
					Netlify
				</a>
				.
			</footer>
		</div>
	);
}
