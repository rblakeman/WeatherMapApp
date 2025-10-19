import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, type Dispatch } from 'redux';

import { fetchWeather } from '../actions/index';

type Props = {
    fetchWeather: (value: string) => void;
};
type State = {
    term: string;
};
class SearchBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form
                className='input-group'
                onSubmit={this.onFormSubmit}>
                <input
                    placeholder='Enter Location for a five-day forecast'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button
                        type='submit'
                        className='btn btn-primary'>
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
