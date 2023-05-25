import React from "react";
import Us from "./Us";
import { Component } from "react";
// import { Card, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import studentData from "./StudentData.json"


class Profile extends Component {

  render() {
    const students = studentData.map((element, idx) =>
      <Us
      key = {idx}
      name = {element.name}
      image = {element.image}
      description = {element.description}
      title = {element.title}
      student = {element}
      // addHeart = {this.props.addHeart}
      // changes = {this.props.changes}
      />)
      /* TODO: render information about the developers */
      return(
        <>
        <h2>About Us</h2>
      <Container>
      <Row> {students}
      </Row>
      </Container>
      </>
    )
  }
}

export default Profile;
