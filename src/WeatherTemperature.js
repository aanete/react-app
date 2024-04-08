import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
	return (
		<div className="row">
			<div className="col">
				<span className="currentTemperature">{Math.round(props.celsius)}</span>
				<span className="units"> °C</span>
			</div>
		</div>
	);
}
