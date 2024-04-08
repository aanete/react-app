import React from "react";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}
	const apiForecastKey = "e6c2364656962bdcb16bc352fc42569a";
	let latitude = props.coordinates.lat;
	let longitude = props.coordinates.lon;

	let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiForecastKey}&units=metric`;
	Axios.get(apiForecastUrl).then(handleResponse);

	return (
		<div className="forecast-one-block">
			<div className="row">
				<div className="col">
					<div className="forecastDay">Tuesday</div>
					<div className="forecastIcon">
						<WeatherIcon code="01d" alt=" " size={60} />
					</div>
					<div className="forecastTemperature">
						<span className="forecastTemperatureMax">10°C </span>|{" "}
						<span className="forecastTemperatureMin">5°C</span>
					</div>
				</div>
			</div>
		</div>
	);
}
