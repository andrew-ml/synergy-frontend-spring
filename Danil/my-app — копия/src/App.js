import React from "react";
import Info from "./components/Info";
import Weather from "./components/Weather";
import Form from "./components/Form";
import Days from "./components/WeatherDays";

const API_KEY = "ba8a72959516691a1f82262980f28000";
const lang = "ru";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    weather: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const API_URL_NOW = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`
      );

      const DATA_NOW = await API_URL_NOW.json();
      console.log(DATA_NOW);

      let weather = DATA_NOW.weather[0].description;
      let weatherInfo = weather[0].toUpperCase() + weather.slice(1);

      this.setState({
        temp: Math.floor(DATA_NOW.main.temp),
        weather: weatherInfo,
        city: DATA_NOW.name,
        country: DATA_NOW.sys.country,
        pressure: DATA_NOW.main.pressure,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        weather: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        error: "Введите название города!"
      });
    }
  };

  gettingWeatherDays = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const API_URL_DAYS = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`
      );

      const DATA_DAYS = await API_URL_DAYS.json();
      console.log(DATA_DAYS);

      DATA_NOW.list.map(function(elem, i) {
        let weather = DATA_NOW.list[i].weather[0].description;
        let weatherInfo = weather[0].toUpperCase() + weather.slice(1);

        this.setState({
          temp_2: Math.floor(DATA_NOW.list[i].main.temp),
          weather_2: weatherInfo,
          city_2: DATA_NOW.city.name,
          country_2: DATA_NOW.city.country,
          pressure_2: DATA_NOW.list[i].main.pressure,
          error_2: undefined
        });
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
            <Form
              weatherMethod={this.gettingWeather}
              weatherMethodDays={this.gettingWeatherDays}
            />
          </div>
          <div>
            <Weather
              temp={this.state.temp}
              weather={this.state.weather}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              error={this.state.error}
            />
          </div>
          <div>
            <Days
              temp={this.state.temp_2}
              weather={this.state.weather_2}
              city={this.state.city_2}
              country={this.state.country_2}
              pressure={this.state.pressure_2}
              error={this.state.error_2}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
