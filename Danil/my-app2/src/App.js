import React from "react";
import WeatherDays from "./components/WeatherDays";
import WeatherNow from "./components/WeatherNow";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="conteiner">
          <div>
            <div>
              <WeatherNow />
            </div>
            <div>
              <WeatherDays />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
