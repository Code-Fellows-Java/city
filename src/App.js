import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
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

      console.log(response.data[0]);
      this.setState({location: response.data[0]});
    } catch (error) {
      console.log(error);
      this.setState({error: true});
      this.setState({errorMessage: error.message});

    }
  }


  render() {
    return (
      <>
        <input onChange={this.handleInput} placeholder="Search for a city"></input>
        <button onClick={this.handleSearch}>Explore!</button>
        {this.state.location.display_name &&
          <>
            <h2>This City is: {this.state.location.display_name}</h2>
            <p>Latitude: {this.state.location.lat}</p>
            <p>Longitude: {this.state.location.lon}</p>
          </>
        }
        {this.state.error &&
          <p> Whoops! {this.state.errorMessage}</p>
        }
        </>
    )
  }
}


export default App;
