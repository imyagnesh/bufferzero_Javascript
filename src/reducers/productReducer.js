const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'load_products_request':
      return { ...state, loading: true };

    case 'load_products_success':
      return { ...state, loading: false, data: payload };

    case 'load_products_fail':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
