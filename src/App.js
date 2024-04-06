import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<Weather defaultCity="Bergen" />
			<footer>
				This project was coded by{" "}
				<a href="https://github.com/aanete" target="_blank" rel="noreferrer">
					Anete Alksne
				</a>{" "}
				and is open-sourced on{" "}
				<a
					href="https://github.com/aanete/react-app"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>{" "}
				and hosted on{" "}
				<a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
					Netlify
				</a>
				.
			</footer>
		</div>
	);
}
