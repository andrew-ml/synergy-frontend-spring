import React from "react";
import Info from "./components/info";
import Weather from "./components/weather";
import Form from "./components/form";

const API_KEY = "ba8a72959516691a1f82262980f28000";

class App extends React.Component {
  gettingWeather = async e => {
    e.preventDefault();
    const API_URL = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`
    );
    const DATA = await API_URL.json();
    console.log(DATA);
  };
  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
