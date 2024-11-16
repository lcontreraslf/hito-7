import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { agregarAlCarrito } = useCart();

  const ingredientsPizzaMap = pizza.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <Card>
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.desc}</Card.Text>
        <ul>{ingredientsPizzaMap}</ul>
        <Card.Text>
          <strong>Precio:</strong> ${pizza.price}
        </Card.Text>
        <Button variant="primary" onClick={() => agregarAlCarrito(pizza)}>
          Agregar al Carrito
        </Button>
        <Link to={`/pizza/${pizza.id}`} className="btn btn-secondary mt-2">
          Ver Detalles
        </Link>
      </Card.Body>
    </Card>
  );
};

CardPizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardPizza;
