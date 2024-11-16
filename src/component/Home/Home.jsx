import { useState, useEffect } from "react";
import CardPizza from "../CardPizza/CardPizza";
import Header from "./Header";

export default function Home() {
  const [listPizza, setListPizza] = useState([]);

  useEffect(() => {
    pizzaRequest();
  }, []);

  const pizzaRequest = async () => {
    const URL = "http://localhost:5232/api/pizzas";
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const pizzas = await response.json();
      setListPizza(pizzas); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error("Error al obtener las pizzas:", error.message);
    }
  };

  return (
    <div id="home">
      <Header />
      <div className="row">
        {listPizza.map((pizza, index) => (
          <CardPizza key={index} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
