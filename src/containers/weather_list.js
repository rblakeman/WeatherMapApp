import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const NAME = cityData.city.name
    const TEMPSk = cityData.list.map((weather) => weather.main.temp)
    const TEMPSf = _.map(TEMPSk, (temp) => (temp * 9) / 5 - 459.67)
    const HUMIDITY = cityData.list.map((weather) => weather.main.humidity)
    const PRESSURE = cityData.list.map((weather) => weather.main.pressure)

    const { lon, lat } = cityData.city.coord

    return (
      <tr key={NAME}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={TEMPSf} color="red" units="ºF" />
        </td>
        <td>
          <Chart data={PRESSURE} color="green" units=" hPa" />
        </td>
        <td>
          <Chart data={HUMIDITY} color="blue" units="%" />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (ºF)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  //return { weather: state.weather };
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
