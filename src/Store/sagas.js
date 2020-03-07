import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import ActionTypes from "../Constants/actionTypes";

function* createProduct(action) {
  yield axios.post("http://localhost:3333/products", action.payload);

  put(action);
}

function* updateProduct(action) {
  yield axios.put(
    `http://localhost:3333/products/${action.payload.id}`,
    action.payload
  );

  put(action);
}

function* deleteProduct(action) {
  yield axios.delete(`http://localhost:3333/products/${action.payload.id}`);

  put(action);
}

function* clearCart(action) {
  for (let i = 0; i < action.payload.length; i++) {
    yield axios.delete(
      `http://localhost:3333/products/${action.payload[i].id}`
    );
  }

  put(action);
}

function* CartSaga() {
  yield takeEvery(ActionTypes.ADD_CART, createProduct);
  yield takeEvery(ActionTypes.UPDATE_CART, updateProduct);
  yield takeEvery(ActionTypes.REMOVE_CART, deleteProduct);
  yield takeEvery(ActionTypes.CLEAR_ALL_CART, clearCart);
}

export default CartSaga;
