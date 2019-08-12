import React from "react";
import Info from "./components/Info";
import Weather from "./components/Weather";
import Form from "./components/Form";

const API_KEY = "ba8a72959516691a1f82262980f28000";
const lang = "ru";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    weather: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const API_URL = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`
      );
      const DATA = await API_URL.json();

      let sunset = DATA.sys.sunset;
      let date_1 = new Date();
      date_1.setTime(sunset);
      let sunset_date = date_1.getHours() + ":" + date_1.getMinutes();

      let sunrise = DATA.sys.sunrise;
      let date_2 = new Date();
      date_2.setTime(sunrise);
      let sunrise_date = date_2.getHours() + ":" + date_2.getMinutes();

      let weather = DATA.weather[0].description;
      let weatherInfo = weather[0].toUpperCase() + weather.slice(1);

      this.setState({
        temp: Math.floor(DATA.main.temp),
        weather: weatherInfo,
        city: DATA.name,
        country: DATA.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        pressure: DATA.main.pressure,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        weather: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        error: "Введите название города!"
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="info">
          <Info />
        </div>
        <div className="form">
          <div>
            <Form weatherMethod={this.gettingWeather} />
          </div>
          <div>
            <Weather
              temp={this.state.temp}
              weather={this.state.weather}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
