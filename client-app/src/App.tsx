import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Image, Card } from "semantic-ui-react";

function App() {
  return (
    <Fragment>
      <h1>This is a header!</h1>
      <p>Paragraph!</p>
      <button>This is a button</button>
      <p>Poof!</p>
      <Button
        color="red"
        content="Like"
        icon="heart"
        label={{
          basic: true,
          color: "red",
          pointing: "left",
          content: "2,048",
        }}
      />
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/steve.jpg"
          />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Fragment>
  );
}

export default App;
