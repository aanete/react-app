import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h2>{props.data.city}</h2>
			<div className="row">
				<div className="col-4">
					<ul>
						<li>
							<FormatedDate date={props.data.date} />
						</li>
						<li className="text-capitalize">{props.data.description}</li>

						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind} m/s</li>
					</ul>
				</div>
				<div className="col-2">
					<WeatherIcon code={props.data.icon} alt={props.data.description} />
				</div>

				<div className="col-6">
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
			</div>
		</div>
	);
}
