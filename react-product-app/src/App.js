// src/App.js
import React from "react";
import productData from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const firstName = "John"; // Replace "John" with your first name, or leave it as is.

function App() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Image imageUrl={productData.image} />
          <Name name={productData.name} />
          <Price price={productData.price} />
          <Description description={productData.description} />
        </Card.Body>
      </Card>
      <p className="mt-3">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>
    </Container>
  );
}

export default App;
