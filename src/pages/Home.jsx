import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../assets/pizzas";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Home() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    infoPizzasAppi();
  }, []);

  const infoPizzasAppi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);

    console.log(data);
  };

  const mapPizzas = info.map((pizza) => {
    return (
      <Col key={pizza.id}>
        <CardPizza pizza={pizza} />
      </Col>
    );
  });
  // console.log(mapPizzas);
  return (
    <div>
      <Container>
        <Row className="g-4" xs={1} md={2} lg={4}>
          {mapPizzas}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
