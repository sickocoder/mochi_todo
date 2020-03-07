import React from "react";

import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

import { Container } from "./styles";

export default function TodoItem({
  data,
  onEditPress,
  onDeletePress,
  onItemPress
}) {
  return (
    <Container style={{ pointerEvents: data.done ? "none" : "auto" }}>
      <div className="back">
        <button onClick={() => onEditPress(data.id)}>
          <FaRegEdit size={18} color="#fff" />
        </button>
        <button onClick={() => onDeletePress(data.id)}>
          <FaTrashAlt size={18} color="#fff" />
        </button>
      </div>
      <div
        className="up"
        style={{ textDecoration: data.done ? "line-through" : "none" }}
      >
        <img
          src="https://img.favpng.com/0/1/14/sneakers-skate-shoe-nike-one-png-favpng-hEt292Qw6YhB7kAvJ7XbgRg7X.jpg"
          alt="nike"
        />
        <div>
          <h4>{data.name}</h4>
          <h5>
            Preço: {data.price}kz • Quantidade: {data.quantity}
          </h5>
        </div>
      </div>
    </Container>
  );
}
