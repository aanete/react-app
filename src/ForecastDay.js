import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function FunctionDay(props) {
	function maxTemperature() {
		let temperature = Math.round(props.data.temp.max);
		return `${temperature}°C`;
	}
	function minTemperature() {
		let temperature = Math.round(props.data.temp.min);
		return `${temperature}°C`;
	}

	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();

		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		return days[day];
	}

	return (
		<div className="forecast">
			<div className="forecastDay">{day()}</div>
			<div className="forecastIcon">
				<WeatherIcon code={props.data.weather[0].icon} alt=" " size={50} />
			</div>
			<div className="forecastTemperature">
				<span className="forecastTemperatureMax">{maxTemperature()} </span>|{" "}
				<span className="forecastTemperatureMin">{minTemperature()}</span>
			</div>
		</div>
	);
}
