import React from "react";
import Movie from "./Movie";
import Weather from "./Weather";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


class Search extends React.Component {
  render() {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Weather</Accordion.Header>
            <Accordion.Body>
              {this.props.weather.map(weather => (<Weather date={weather.date} description={weather.description} />))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Movies</Accordion.Header>
            <Accordion.Body>
              {this.props.movieData.map(movie => (<Movie data={movie} />))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>

    )
  }
}

export default Search;




