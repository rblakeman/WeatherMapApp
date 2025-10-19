import axios from 'axios';

const API_ACCESS_KEY = import.meta.env.VITE_apiAccessKeyWeather;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_ACCESS_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city: string) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}
