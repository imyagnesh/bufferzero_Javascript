const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'load_products_success':
      return payload;

    default:
      return state;
  }
};
