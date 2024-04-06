import React, { useState } from "react";

export default function WeatherTemperature(props) {
	let [temperature, setTemperature] = useState(props.celsius);
	const [unit, setUnit] = useState("celsius");

	function showFahrenheit(event) {
		event.preventDefault();
		let temperatureFahrenheit = (props.celsius * 9) / 5 + 32;
		setTemperature(Math.round(temperatureFahrenheit));
		setUnit("false");
	}

	function showCelsius(event) {
		event.preventDefault();
		setTemperature(props.celsius);
		setUnit("celsius");
	}

	function fahrenheit() {
		return (props.celsius * 9) / 5 + 32;
	}

	if (unit === `celsius`) {
		return (
			<div className="row">
				<div className="col-1"></div>
				<div className="col-4">
					<span className="currentTemperature">
						{Math.round(props.celsius)}
					</span>
				</div>
				<div className="col-4">
					<span className="units">
						{" "}
						°C |{" "}
						<a href="/" onClick={showFahrenheit}>
							°F
						</a>{" "}
					</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="row">
				<div className="col-1"></div>
				<div className="col-4">
					<span className="currentTemperature">{Math.round(fahrenheit())}</span>
				</div>
				<div className="col-4">
					<span className="units">
						{" "}
						<a href="/" onClick={showCelsius}>
							°C
						</a>{" "}
						| °F{" "}
					</span>
				</div>
			</div>
		);
	}
}
