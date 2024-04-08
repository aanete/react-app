import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";
import ForecastDay from "./ForecastDay";
import Weather from "./Weather";
import "./Forecast.css";

export default function Forecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="forecast-one-block">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div className="col" key={index}>
									<ForecastDay data={dailyForecast} />
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	} else {
		let apiForecastKey = "c6f8ef4575250284954db9f4dfa7a996";
		let latitude = props.coordinates.lat;
		let longitude = props.coordinates.lon;

		let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiForecastKey}&units=metric`;
		Axios.get(apiForecastUrl).then(handleResponse);

		return null;
	}
}
