import ActionTypes from '../Constants/actionTypes'

export function getCarts(data) {
  return {
    type: ActionTypes.GET_CARTS,
    payload: data
  }
}

export function addCart(cartData) {
  return {
    type: ActionTypes.ADD_CART,
    payload: cartData
  }
}

export function removeCart(cartData) {
  return {
    type: ActionTypes.REMOVE_CART,
    payload: cartData
  }
}

export function updateCart(cartData) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: cartData
  }
}

export function clearCart(data) {
  return {
    type: ActionTypes.CLEAR_ALL_CART,
    payload: data
  }
}

export function completeCart(cartData) {
  return {
    type: ActionTypes.COMPLETE_CART,
    payload: cartData
  }
}
