const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'load_cart_request':
      return { ...state, loading: true };

    case 'load_cart_success':
      return { ...state, loading: false, data: payload };

    case 'load_cart_fail':
      return { ...state, loading: false, error: payload };

    case 'add_cart_request':
      return { ...state, loading: true };

    case 'add_cart_success':
      return { ...state, loading: false, data: [...state.data, payload] };

    case 'add_cart_fail':
      return { ...state, loading: false, error: payload };

    case 'update_cart_request':
      return { ...state, loading: true };

    case 'update_cart_success': {
      const index = state.data.findIndex((x) => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [
          ...state.data.slice(0, index),
          payload,
          ...state.data.slice(index + 1),
        ],
      };
    }

    case 'update_cart_fail':
      return { ...state, loading: false, error: payload };

    case 'delete_cart_request':
      return { ...state, loading: true };

    case 'delete_cart_success': {
      const index = state.data.findIndex((x) => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
      };
    }

    case 'delete_cart_fail':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
