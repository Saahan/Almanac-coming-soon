import React from "react";
import Card from "react-bootstrap/Card";

export default function FeatureCard(props) {
  return (
    <Card
      style={{
        width: "16rem", 
        backgroundColor: "#1d2d60",
        height: "18rem",
        margin: "40px",
      }}
    >
      <Card.Body>
        <Card.Title
          style={{ color: "white", fontSize: "x-large", height: "4rem" }}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ color: "white", fontSize: "x-large" }}>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
