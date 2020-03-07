import ActionTypes from "../Constants/actionTypes";

const INITIAL_STATE = {
  data: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_CARTS:
      return { data: action.payload };

    case ActionTypes.ADD_CART:
      return { ...state, data: [...state.data, action.payload] };

    case ActionTypes.REMOVE_CART:
      const newData = [];
      state.data.forEach(item => {
        if (item.id !== action.payload.id) {
          newData.push(item);
        }
      });
      return { ...state, data: newData };

    case ActionTypes.UPDATE_CART:
      let temp = [];
      state.data.forEach(item => {
        if (item.id !== action.payload.id) {
          temp.push(item);
        } else {
          temp.push(action.payload);
        }
      });
      return { ...state, data: temp };

    case ActionTypes.CLEAR_ALL_CART:
      return { data: [] };

    case ActionTypes.COMPLETE_CART:
      let data = [];
      state.data.forEach(item => {
        if (item.id !== action.payload.id) {
          data.push(item);
        } else {
          let aux = item;
          aux.done = true;
          data.push(aux);
        }
      });
      return { ...state, data: data };

    default:
      return state;
  }
}
