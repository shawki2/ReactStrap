import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class PeopleCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { id, name, company, info } = this.props.person;
    //let { removePerson } = this.props;
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardText>{info}</CardText>
            <Button color="primary" onClick={() => this.props.removePerson(id)}>
              Delete
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PeopleCards;
