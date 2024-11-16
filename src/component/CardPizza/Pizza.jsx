import { useState, useEffect } from "react";

export default function Pizza() {
  const [datosPizza, setDatosPizza] = useState(null);

  useEffect(() => {
    pizzaRequest();
  }, []);

  const pizzaRequest = async () => {
    const URL = "http://localhost:5232/api/pizzas/p001";
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const pizza = await response.json();
      setDatosPizza(pizza);
    } catch (error) {
      console.error("Error al obtener la pizza:", error.message);
    }
  };

  return (
    <div id="home">
      {datosPizza ? (
        <>
          <h1>{datosPizza.name}</h1>
          <p>
            <strong>Descripción:</strong> {datosPizza.desc}
          </p>
          <p>
            <strong>Precio:</strong> ${datosPizza.price}
          </p>
          <p>
            <strong>Ingredientes:</strong> {datosPizza.ingredients.join(", ")}
          </p>
          <img
            src={datosPizza.img}
            alt={datosPizza.name}
            style={{ width: "200px", height: "200px", borderRadius: "10px" }}
          />
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
