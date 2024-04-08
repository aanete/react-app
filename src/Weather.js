import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
	const [currentWeather, setCurrentWeather] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		setCurrentWeather({
			ready: true,
			city: response.data.name,
			temperature: response.data.main.temp,
			date: new Date(response.data.dt * 1000),
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			coordinates: response.data.coord,
		});
	}

	function search() {
		const apiKey = `c6f8ef4575250284954db9f4dfa7a996`;

		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search(city);
	}

	function handleCityName(event) {
		setCity(event.target.value);
	}

	if (currentWeather.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								className="form-control"
								autoFocus="on"
								placeholder="Enter a city..."
								onChange={handleCityName}
							></input>
						</div>
						<div className="col-3">
							<input
								type="submit"
								className="btn btn-primary w-100"
								value="Search"
							></input>
						</div>
					</div>
				</form>
				<WeatherInfo data={currentWeather} />
				<Forecast coordinates={currentWeather.coordinates} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
