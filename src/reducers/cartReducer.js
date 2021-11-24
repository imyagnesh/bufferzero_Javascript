const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'load_cart_success':
      return payload;

    case 'add_cart_success':
      return [...state, payload];

    case 'update_cart_success': {
      const index = state.findIndex((x) => x.id === payload.id);
      return [...state.slice(0, index), payload, ...state.slice(index + 1)];
    }

    case 'delete_cart_success': {
      const index = state.findIndex((x) => x.id === payload.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
