import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      weather: [],
      error: false,
      errorMessage: '',
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
    console.log(this.state.searchQuery);
  }

  handleSearch = async (e) => {
    e.preventDefault();
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      const loc = response.data[0];
      

      console.log(loc);
      this.setState({ location: response.data[0] });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });

    }
    
  }


  handleWeather = async (e) => {
    e.preventDefault();
    try {
      const API = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(API);
      const weather = response.data;
      console.log(weather);
      this.setState({ weather: response.data });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });

    }

  }



  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <input onChange={this.handleInput} placeholder="Search for a city....."></input>
        <button onClick={this.handleSearch}>Explore</button>
        <button onClick={this.handleWeather}>Weather</button>
        {this.state.location.display_name &&
          <>
            <h2>This City is: {this.state.location.display_name}</h2>
            <p>Latitude: {this.state.location.lat}</p>
            <p>Longitude: {this.state.location.lon}</p>
            <p>Weather: {this.state.weather}</p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12&markers=${this.state.location.lat},${this.state.location.lon}|icon:large-red-cutout&format=png`} alt="map" />
          </>
        }
        {this.state.error &&
          <p class='error'> Whoops! {this.state.errorMessage}</p>
        }
      </>
    )
  }
}


export default App;
