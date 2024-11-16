import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Pizza() {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`); 
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza data:", error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>{pizza.name}</h1>
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
          <p>{pizza.desc}</p>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p><strong>Precio:</strong> ${pizza.price}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Pizza;
