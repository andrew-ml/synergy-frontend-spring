import React from "react";

const Form = props => (
  <form onSubmit={props.weatherMethod} onSubmit={props.weatherMethodDays}>
    <div className="form_atributs">
      <p className="title_form">Узнайте погоду в вашем городе!</p>
      <div className="input">
        <input type="text" name="city" placeholder="Город" />
      </div>
      <div>
        <button className="button">Получить погоду</button>
      </div>
    </div>
  </form>
);

export default Form;
