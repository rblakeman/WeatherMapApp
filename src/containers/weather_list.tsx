import _ from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';

import { Chart } from '../components/chart';
import { GoogleMap } from '../components/google_map';

type Weather = {
    city: {
        coord: { lat: number; lon: number };
        country: string;
        id: number;
        name: string;
        population: number;
        sunrise: number;
        sunset: number;
        timezone: number;
    };
    cnt: number;
    cod: string;
    list: {
        clouds: { all: number };
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
        sys: { pod: string };
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
    message: number;
};

type Props = {
    weather: Weather[];
};
class WeatherList extends Component<Props> {
    renderWeather(cityData: Weather | undefined, idx: number) {
        const NAME = cityData?.city.name;
        const TEMPSk = cityData?.list.map((weather) => weather.main.temp) ?? [
            0,
        ];
        const TEMPSf = _.map(TEMPSk, (temp) => (temp * 9) / 5 - 459.67) ?? [0];
        const HUMIDITY = cityData?.list.map(
            (weather) => weather.main.humidity,
        ) ?? [0];
        const PRESSURE = cityData?.list.map(
            (weather) => weather.main.pressure,
        ) ?? [0];

        const { lat, lon } = cityData?.city.coord ?? { lat: 0, lon: 0 };

        return (
            <tr key={`${NAME}-${idx}`}>
                <td>
                    {NAME ? (
                        <GoogleMap
                            lat={lat}
                            lon={lon}
                        />
                    ) : (
                        <div>An Error Has Occurred</div>
                    )}
                </td>
                <td>
                    <Chart
                        data={TEMPSf}
                        color='red'
                        units='ºF'
                    />
                </td>
                <td>
                    <Chart
                        data={PRESSURE}
                        color='green'
                        units=' hPa'
                    />
                </td>
                <td>
                    <Chart
                        data={HUMIDITY}
                        color='blue'
                        units='%'
                    />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
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
