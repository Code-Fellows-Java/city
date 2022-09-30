import React from 'react';
import axios from 'axios';
import Search from './Search.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      movieData: {},
      weather: {},
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
      this.handleWeather();
      this.handleMovie();
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });

    }

  }


  handleWeather = async () => {
    try {
      // const API = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}`;
      const API = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(API);
      let weatherData = response.data.map(weatherData => {
        return weatherData;
      })
      console.log(weatherData);
      this.setState({ weather: weatherData });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });

    }

  }

  handleMovie = async () => {
    try {
      // const API = `http://localhost:3001/movies?searchQuery=${this.state.searchQuery}`;
      const API = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(API);
      let movie = response.data.map(movieData => {
        return movieData;
      })
      console.log(movie);
      this.setState({ movieData: movie });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });

    }

  }



  render() {
    console.log('Weathers state is: ', this.state.weather);
    return (
      <>
        <h1>City Explorer</h1>
        <input onChange={this.handleInput} placeholder="Search for a city....."></input>
        <button onClick={this.handleSearch}>Explore</button>
        {this.state.weather.length > 0 &&
          <>
            <h2>This City is: {this.state.location.display_name}</h2>
            <p>Latitude: {this.state.location.lat}</p>
            <p>Longitude: {this.state.location.lon}</p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12&markers=${this.state.location.lat},${this.state.location.lon}|icon:large-red-cutout&format=png`} alt="map" />
            <div class="API">
              <Search weather = {this.state.weather} movieData = {this.state.movieData}/>
            </div>
            
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
