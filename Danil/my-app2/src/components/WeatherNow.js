import React from "react";
import Form from "./Form";

const API_KEY = "ba8a72959516691a1f82262980f28000";
const lang = "ru";

class WeatherNow extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    weather: undefined,
    humidity: undefined,
    wind: undefined,
    clouds: undefined,
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
        humidity: DATA_NOW.main.humidity,
        wind: DATA_NOW.wind.speed,
        clouds: DATA_NOW.clouds.all,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        weather: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        wind: undefined,
        clouds: undefined,
        error: "Введите название города"
      });
    }
  };
  render() {
    return (
      <div>
        <div className="form">
          <Form weatherMethod={this.gettingWeather} />
        </div>
        <div>
          {this.state.city && (
            <div className="info">
              <div className="info_left">
                <p className="city">
                  {this.state.city}, {this.state.country}
                </p>
                <p className="temp">
                  {this.state.temp}
                  <sup>°С</sup>
                </p>
              </div>
              <div className="info_right">
                <p className="weather_info">{this.state.weather}</p>
                <div className="additional_info">
                  <div>
                    <p>Влажность: {this.state.humidity} %</p>
                    <p>Давление: {this.state.pressure} гПа</p>
                  </div>
                  <div className="additional-right">
                    <p>Скорость ветра: {this.state.wind} м/с</p>
                    <p>Облачность: {this.state.clouds} %</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <p className="error">{this.state.error}</p>
        </div>
      </div>
    );
  }
}

export default WeatherNow;
