import axiosInstance from '../utils/axiosInstance';

export const loadProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: 'load_products_request' });
    const res = await axiosInstance.get('660/products');
    console.log(res);
    dispatch({ type: 'load_products_success', payload: res });
  } catch (error) {
    dispatch({ type: 'load_products_fail', payload: error });
  }
};
