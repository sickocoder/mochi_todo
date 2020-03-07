import ActionTypes from "../Constants/actionTypes";

export function getTodos(data) {
  return {
    type: ActionTypes.GET_CARTS,
    payload: data
  };
}

export function addTodo(todoData) {
  return {
    type: ActionTypes.ADD_CART,
    payload: todoData
  };
}

export function removeTodo(todoData) {
  return {
    type: ActionTypes.REMOVE_CART,
    payload: todoData
  };
}

export function updateTodo(todoData) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: todoData
  };
}

export function clearCart(data) {
  return {
    type: ActionTypes.CLEAR_ALL_CART,
    payload: data
  };
}

export function completeTodo(todoData) {
  return {
    type: ActionTypes.COMPLETE_CART,
    payload: todoData
  };
}
