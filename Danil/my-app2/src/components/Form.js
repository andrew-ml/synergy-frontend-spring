import React from "react";

const Form = props => (
  <form onSubmit={props.weatherMethod}>
    <div className="form">
      <div className="input">
        <input type="text" name="city" placeholder="Город" />
      </div>
      <div>
        <button className="button">Поиск</button>
      </div>
    </div>
  </form>
);

export default Form;
