import React from "react";

const Days = () => (
  <div>
    {props.city && (
      <div className="">
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

export default Days;
