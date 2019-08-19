import React from "react";
import DailyWeather from "./components/DailyWeather";
import WeatherNow from "./components/WeatherNow";
import WeatherHour from "./components/WeatherHour";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="conteiner">
          <div>
            <WeatherNow />
          </div>
          <div>
            <WeatherHour />
          </div>
          <div>
            <DailyWeather />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
