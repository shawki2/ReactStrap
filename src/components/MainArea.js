import React from "react";
import { Container, Row, Col } from "reactstrap";
import PeopleCards from "./PeopleCards";

export default class MainArea extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "Shawki Al-Dubaee",
          company: "SAR LTD",
          info: "It is a startup company1"
        },
        {
          id: 2,
          name: "David Became",
          company: "Became LTD",
          info: "It is a startup company2"
        },
        {
          id: 3,
          name: "James McDonald",
          company: "Nano LTD",
          info: "It is a startup company3"
        },
        {
          id: 4,
          name: "Nakobi Became",
          company: "Nakobi LTD",
          info: "It is a startup company4"
        },
        {
          id: 5,
          name: "Mozafe Haider",
          company: "Haider LTD",
          info: "It is a startup company5"
        },
        {
          id: 6,
          name: "Maraco Mo",
          company: "Muraco LTD",
          info: "It is a startup company6"
        },
        {
          id: 7,
          name: "Hani Shaker",
          company: "Shaker LTD",
          info: "It is a startup company7"
        },
        {
          id: 8,
          name: "Sami Yosef",
          company: "Yosef LTD",
          info: "It is a startup company8"
        }
      ]
    };
  }
  removePerson = id => {
    this.setState({
      people: this.state.people.filter(person => person.id !== id)
    });
  };

  render() {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="3">
          <PeopleCards
            removePerson={this.removePerson.bind(this)}
            person={person}
          />
        </Col>
      );
    });
    return (
      <Container fluid>
        <Row> {peopleCards}</Row>
      </Container>
    );
  }
}
