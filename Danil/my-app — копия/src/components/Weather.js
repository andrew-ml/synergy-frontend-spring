import React from "react";

const Weather = props => (
  <div>
    {props.city && (
      <div className="weather_info">
        <p>
          Местоположение: {props.city}, {props.country}
        </p>
        <p>Температура: {props.temp} °С</p>
        <p>Погода: {props.weather}</p>
        <p>Давление: {props.pressure} мм рт. ст.</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;
