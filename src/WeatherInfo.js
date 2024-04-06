import React from "react";
import FormatedDate from "./FormatedDate";
import "./Weather.css";
export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h2>{props.data.city}</h2>
			<div className="row">
				<div className="col-5">
					<ul>
						<li>
							<FormatedDate date={props.data.date} />
						</li>
						<li className="text-capitalize">{props.data.description}</li>

						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind} m/s</li>
					</ul>
				</div>
				<div className="col-3">
					<img src={props.data.icon} alt="weather icon" />
				</div>

				<div className="col-4">
					<span className="currentTemperature">
						{Math.round(props.data.temperature)}
					</span>
					<span className="units">°C</span>
				</div>
			</div>
		</div>
	);
}
