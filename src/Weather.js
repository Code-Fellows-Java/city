import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        weather: [],
        error: false,
        errorMessage: '',
        }
    }
    
    handleWeather = async (e) => {
        e.preventDefault();
        try {
        const API = `http://localhost:3001/weather?searchQuery=${this.props.searchQuery}`;
        const response = await axios.get(API);
        const weather = response.data[0];
        console.log(weather);
        this.setState({ weather: response.data[0] });
        } catch (error) {
        console.log(error);
        this.setState({ error: true });
        this.setState({ errorMessage: error.message });
    
        }
    
    }

    render() {
        return (
            <>
            <h1>Weather</h1>
            <button onClick={this.handleWeather}>Get Weather</button>
            </>
        )
    }
}

export default Weather;