import React, { createContext, useContext, useState } from "react";
import { pizzaCart } from "../assets/pizzas";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);

  const agregarAlCarrito = (pizza) => {
    setCart((prevCart) => {
      const pizzaExistente = prevCart.find((item) => item.id === pizza.id);
      if (pizzaExistente) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  const incrementaCantidad = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const disminuyeCantidad = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const eliminarDelCarrito = (id) => {
    setCart(cart.filter((pizza) => pizza.id !== id));
  };

  const totalCompra = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        incrementaCantidad,
        disminuyeCantidad,
        eliminarDelCarrito,
        totalCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
