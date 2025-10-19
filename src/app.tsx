import { Component } from 'react';

import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export default class App extends Component {
    constructor(props: Props) {
        super(props);

        console.log('last updated: Oct 19, 2025');
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
