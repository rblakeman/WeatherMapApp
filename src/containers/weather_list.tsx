import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Chart } from '../components/chart';
import { GoogleMap } from '../components/google_map';

type Weather = {
    city: {
        coord: { lat: number, lon: number },
        country: string;
        id: number;
        name: string;
        population: number;
        sunrise: number;
        sunset: number;
        timezone: number;
    },
    cnt: number;
    cod: string;
    list: {
        clouds: { all: number; };
        dt: number;
        dt_txt: string;
        main: {
            feels_like: number;
            grnd_level: number;
            humidity: number;
            pressure: number;
            sea_level: number;
            temp: number;
            temp_kf: number;
            temp_max: number;
            temp_min: number;
        };
        pop: number;
        sys: { pod: string; };
        visibility: number;
        weather: {
            description: string;
            icon: string;
            id: number;
            main: string;
        }[];
        wind: {
            speed: number;
            deg: number;
            gust: number;
        };
    }[];
    message : number;
}

type Props = {
    weather: Weather[]
};

class WeatherList extends Component<Props> {
    renderWeather(cityData: Weather) {
        const NAME = cityData.city.name;
        const TEMPSk = cityData.list.map((weather) => weather.main.temp);
        const TEMPSf = _.map(TEMPSk, (temp) => (temp * 9) / 5 - 459.67);
        const HUMIDITY = cityData.list.map((weather) => weather.main.humidity);
        const PRESSURE = cityData.list.map((weather) => weather.main.pressure);

        const { lat, lon  } = cityData.city.coord;

        return (
            <tr key={NAME}>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
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
        );
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
        );
    }
}

function mapStateToProps(state: Props) {
    const { weather } = state;

    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
