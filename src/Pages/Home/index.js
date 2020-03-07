import React, { useState, useEffect, useRef, useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  updateTodo,
  getTodos,
  clearCart
} from "../../Store/actions";

import { Container } from "./styles";
import TodoItem from "../../Components/TodoItem";

export default function Home() {
  const [selectedCartItem, setSelectedCartItem] = useState(null);

  const productNameRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3333/products")
        .then(resp => resp.json())
        .then(data => {
          dispatch(getTodos(data));
        });
    })();
  }, [dispatch]);

  const productCount = useMemo(() => {
    let total = 0;
    data.forEach(
      item => (total += parseInt(item.price) * parseInt(item.quantity))
    );
    return total;
  }, [data]);

  return (
    <Container>
      <div className="middleSection">
        <form onSubmit={handleSubmit}>
          <input
            ref={productNameRef}
            type="text"
            id="todoContent"
            placeholder="Nome do produto"
          />
          <div className="inline">
            <input
              ref={quantityRef}
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Quantidade"
            />
            <input
              ref={priceRef}
              type="number"
              id="price"
              name="price"
              placeholder="Preço"
            />
          </div>
          <button
            className="btnClearAll"
            type="submit"
            style={{ width: "100%" }}
          >
            GUARDAR NO CARRINHO
          </button>
        </form>

        <ul>
          {data.map(item => (
            <div
              key={item.id}
              className={item === selectedCartItem ? "selected" : ""}
            >
              <TodoItem
                onDeletePress={handleRemove}
                onEditPress={handleUpdate}
                data={item}
              />
            </div>
          ))}
        </ul>

        {data.length > 0 ? (
          <div className="bottomSection">
            <span>
              {data.length} íte{data.length > 1 ? "ns" : "m"}
              <br />
              Total: {productCount * 1000}kz
            </span>
            <button className="btnClearAll" onClick={handleClearAll}>
              LIMPAR TUDO
            </button>
          </div>
        ) : (
          <span />
        )}
      </div>
    </Container>
  );

  function handleSubmit(event) {
    event.preventDefault();

    const name = productNameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;

    if (name === "" || price === "" || quantity === "") {
      alert("Por favor preencha todos os campos!");
      return;
    }

    if (selectedCartItem === null) {
      dispatch(
        addTodo({
          name,
          price,
          quantity
        })
      );
    } else {
      dispatch(
        updateTodo({
          id: selectedCartItem.id,
          name,
          price,
          quantity
        })
      );
      setSelectedCartItem(null);
    }

    productNameRef.current.value = "";
    quantityRef.current.value = "";
    priceRef.current.value = "";
  }

  function handleRemove(id) {
    dispatch(removeTodo({ id }));
  }

  function handleUpdate(id) {
    const product = data.find(item => item.id === id);
    setSelectedCartItem(product);

    productNameRef.current.value = product.name;
    priceRef.current.value = product.price;
    quantityRef.current.value = product.quantity;
  }

  function handleClearAll() {
    dispatch(clearCart(data));
  }
}
