import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    console.log(this.props.weather);
    return (
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{this.props.date}</Accordion.Header>
          <Accordion.Body>
            {this.props.description}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}
export default Weather;