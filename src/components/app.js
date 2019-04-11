import React, { Component } from "react";
import SearchBar from "../container/SearchBar";
import WeatherList from "../container/weatherList";

export default class App extends Component {
  render() {
    return (
      <div className="fontify  ">
        <div className="row m-3">
          <SearchBar />
        </div>
        <div className="row">
          <div className="col m-3">
            <WeatherList />
          </div>
        </div>
      </div>
    );
  }
}
