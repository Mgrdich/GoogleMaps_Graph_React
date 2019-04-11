import React from "react";
import { connect } from "react-redux";
import TableHead from "../components/Reusable/TableHead";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Graph from "../components/Reusable/Graph";

const WeatherList = props => {
  console.log(props.weather);

  const columns = [
    { label: "City" },
    { label: "Country" },
    { label: "Temperature (K)" },
    { label: "Pressure (hPa)" },
    { label: "Humidity (%)" }
  ];
  const RenderWeather = CityData => {
    //the map will pass the item with it
    const batikh = CityData.city;
    const { name, country } = batikh;
    const { lon, lat } = batikh.coord;
    console.log(lon, lat);
    const array = CityData.list;
    //const name = CityData.city.name;
    //const country = CityData.city.country;
    const TempData = ArrayReduced(array, "temp");
    const PressureData = ArrayReduced(array, "pressure");
    const HumidityData = ArrayReduced(array, "humidity");
    const center = { lon, lat };
    const style = { height: "250px", width: "300px" };
    return (
      <tr key={name}>
        <td>
          <div className="haogo">
            <Map
              style={style}
              google={props.google}
              zoom={11}
              initialCenter={{
                lat: lat,
                lng: lon
              }}
            />
          </div>
        </td>
        <td>{country}</td>
        <td>
          <Graph color="red" data={TempData} height={360} width={420} />
        </td>
        <td>
          <Graph color="blue" data={PressureData} height={360} width={420} />
        </td>
        <td>
          <Graph color="orange" data={HumidityData} height={360} width={420} />
        </td>
      </tr>
    );
  };
  return (
    <div>
      <table className="table table-responsive mt-3">
        <TableHead columns={columns} />
        <tbody className="table table-light">
          {props.weather.map(RenderWeather)}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};
const bbb = connect(mapStateToProps)(WeatherList);

function ArrayReduced(array, property) {
  return array.reduce((acc, cur) => {
    acc.push(cur.main[property]);
    return acc;
  }, []);
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA2VY9_u0NaQI8YhdH3MQ_xu7gAV2qAucg"
})(bbb);
