import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
	const [currentWeather, setCurrentWeather] = useState({ ready: false });

	function handleResponse(response) {
		console.log(response.data);
		setCurrentWeather({
			ready: true,
			city: response.data.name,
			temperature: response.data.main.temp,
			date: "Saturday, 13:45",
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			description: response.data.weather[0].description,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		});
	}

	if (currentWeather.ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								className="form-control"
								autoFocus="on"
								placeholder="Enter a city..."
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
				<h2>{currentWeather.city}</h2>
				<div className="row">
					<div className="col-5">
						<ul>
							<li>{currentWeather.date}</li>
							<li className="text-capitalize">{currentWeather.description}</li>

							<li>Humidity: {currentWeather.humidity}%</li>
							<li>Wind: {currentWeather.wind} m/s</li>
						</ul>
					</div>
					<div className="col-3">
						<img src={currentWeather.icon} alt="weather icon" />
					</div>

					<div className="col-4">
						<span className="currentTemperature">
							{Math.round(currentWeather.temperature)}
						</span>
						<span className="units">°C</span>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = `210d99196a88b9257ed8cb3535a0a0c5`;
		let city = "Riga";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}
