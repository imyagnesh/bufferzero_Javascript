import axiosInstance from '../utils/axiosInstance';

export const loadCartAction = () => async (dispatch) => {
  try {
    dispatch({ type: 'load_cart_request' });
    const res = await axiosInstance.get('660/cart');
    dispatch({ type: 'load_cart_success', payload: res });
  } catch (error) {
    dispatch({ type: 'load_cart_fail', payload: error });
  }
};

export const addToCartAction = (item) => async (dispatch) => {
  try {
    dispatch({ type: 'add_cart_request' });
    const res = await axiosInstance.post('660/cart', {
      ...item,
      quantity: 1,
    });
    dispatch({ type: 'add_cart_success', payload: res });
  } catch (error) {
    dispatch({ type: 'add_cart_fail', payload: error });
  }
};

export const updateCartAction = (item) => async (dispatch) => {
  try {
    dispatch({ type: 'update_cart_request' });
    const res = await axiosInstance.put(`660/cart/${item.id}`, item);
    dispatch({ type: 'update_cart_success', payload: res });
  } catch (error) {
    dispatch({ type: 'update_cart_fail', payload: error });
  }
};

export const deleteCartAction = (item) => async (dispatch) => {
  try {
    dispatch({ type: 'delete_cart_request' });
    await axiosInstance.delete(`660/cart/${item.id}`);
    dispatch({ type: 'delete_cart_success', payload: item });
  } catch (error) {
    dispatch({ type: 'delete_cart_fail', payload: error });
  }
};
