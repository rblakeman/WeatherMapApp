import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
    constructor(props) {
        super(props);

        console.log('last updated: March 17, 2021');
    }
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
            //<Chart />
        );
    }
}
