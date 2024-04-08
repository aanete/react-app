import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
	return (
		<div className="container WeatherInfo">
			<h2 className="currentCity">{props.data.city}</h2>
			<div className="row">
				<div className="col-sm-4">
					<ul>
						<li>
							<FormatedDate date={props.data.date} />
						</li>
						<li className="text-capitalize">{props.data.description}</li>

						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind} m/s</li>
					</ul>
				</div>
				<div className=" col-sm-3">
					<WeatherIcon
						code={props.data.icon}
						alt={props.data.description}
						size={100}
					/>
				</div>

				<div className="col-sm-5">
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
			</div>
		</div>
	);
}
