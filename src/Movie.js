import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
    render() {
        console.log(this.props.movie);
      return (
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>{this.props.title}</ListGroup.Item>
          </ListGroup>
        </Card>
      );
    }
  }
  export default Movie;