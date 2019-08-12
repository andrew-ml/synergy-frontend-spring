import React from "react";

const Weather = props => (
  <div>
    {props.city && (
      <div>
        <p>
          Местоположение: {props.city}, {props.country}
        </p>
        <p>Температура: {props.temp} °С</p>
        <p>Погода: {props.weather}</p>
        <p>Давление: {props.pressure} мм рт. ст.</p>
        <p>Восход солнца: {props.sunrise}</p>
        <p>Заход солнца: {props.sunset}</p>
      </div>
    )}
    <p>{props.error}</p>
  </div>
);

export default Weather;
