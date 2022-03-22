import React, { useEffect, useState } from "react";
import { Container } from "../styles/style.jsx";
import swal from "sweetalert";

export const Compras = () => {
  const [ingredientes, setIngredientes] = useState([]);

  const [compras, setCompras] = useState({});

  const [cantidades, setCantidades] = useState([]);

  const [valorTotal, setValorTotal] = useState(0);

  const [cantidadItems, setCantidadItems] = useState(0);

  const mostartAlerta = () => {
    swal("Compra con éxito");
  };

  useEffect(() => {
    const f = async () => {
      const data = await getData();
      setIngredientes(data);
      const i = data.map((ingrediente) => {
        return 1;
      });
      setCantidades(i);
    };
    f();
  }, []);

  useEffect(() => {
    let contador = 0;
    let contadorItems = 0;
    Object.keys(compras).forEach((compra) => {
      console.log(compras[compra]);
      const { id, precio } = compras[compra];
      contador += cantidades[id] * precio;
      contadorItems += cantidades[id];
    });
    contador = (Math.round(contador * 100) / 100).toFixed(2);
    setValorTotal(contador);
    setCantidadItems(contadorItems);
  }, [compras, cantidades]);

  const select1 = (event) => {
    const { checked, id, name } = event.target;
    const seleccionados = { ...compras };
    if (checked) {
      seleccionados[name] = {
        id,
        precio: ingredientes[id].price,
      };
    } else {
      delete seleccionados[name];
    }
    setCompras(seleccionados);
  };

  const actualizarCantidades = (event) => {
    const { id } = event.target;

    const a = [...cantidades];

    a[parseInt(id)] += 1;

    setCantidades(a);
  };
  return (
    <Container id="c">
      <h3>INGREDIENTES</h3>
      <h1>Risotto de setas vegano</h1>
      <input type="checkbox" name="" id="cex" />
      Seleccionar todo / Deseleccionar todo
      {ingredientes.map((ingrediente, index) => {
        return (
          <div id="t" key={index}>
            <br />
            <input
              className="check"
              onChange={select1}
              indice={index}
              type="checkbox"
              id={index}
              name={ingrediente.product}
            />
            <label htmlFor="tentacles"> </label>
            <input
              value={cantidades[index]?.toString() || "1"}
              onChange={actualizarCantidades}
              type="number"
              id={index}
              name="tentacles"
              min="1"
              max="100"
            ></input>
            {ingrediente.product}
            <br />
            {ingrediente.brand}
            <br />
            {ingrediente.quantity}
            <br />
            {ingrediente.price}
          </div>
        );
      })}
      <br />
      <h4 id="resultadof">Items {cantidadItems}</h4>
      <h4>Subtotal {valorTotal} $</h4>
      <h4>Gastos de Envío 7,00 $</h4>
      <h2>Total {(Math.round(valorTotal * 7 * 100) / 100).toFixed(2)} $</h2>
      <button onClick={() => mostartAlerta()}>
        Comprar ingredientes:{" "}
        {(Math.round(valorTotal * 7 * 100) / 100).toFixed(2)} $
      </button>
    </Container>
  );
};

export function getData() {
  let url = "https://recipe-rissoto.vercel.app/recipe";

  let settings = {
    method: "GET",
  };

  return new Promise((resolve) => {
    fetch(url, settings)
      .then((res) => res.json())
      .then((json) => {
        resolve(json.ingredients);
      });
  });
}
