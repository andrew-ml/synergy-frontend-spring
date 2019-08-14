import React from "react";

const API_KEY = "ba8a72959516691a1f82262980f28000";
const lang = "ru";

class WeatherDays extends React.Component {
  state = { days: [] };

  gettingWeatherDays = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const API_URL_DAYS = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`
      );

      const DATA_DAYS = await API_URL_DAYS.json();
      console.log(DATA_DAYS);

      DATA_DAYS.list.map(function(elem, i) {
        let weather = elem.list[i].weather[0].description;
        let weatherInfo = weather[0].toUpperCase() + weather.slice(1);

        this.setState({
          temp_2: Math.floor(elem.list[i].main.temp),
          weather_2: weatherInfo,
          city_2: elem.city.name,
          country_2: elem.city.country,
          pressure_2: elem.list[i].main.pressure,
          error_2: undefined
        });
      });
    }
  };
  render() {
    return <div />;
  }
}

export default WeatherDays;
