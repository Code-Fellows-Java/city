import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class Movie extends React.Component {
  render() {
    console.log(this.props.movie);
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.data.image_url}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{this.props.title}</h3>
              <p>{this.props.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </>
    );
  }
}
export default Movie;