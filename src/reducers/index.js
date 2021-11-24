import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import themeReducer from './themeReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import loadingReducer from './loadingReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  locale: localeReducer,
  theme: themeReducer,
  products: productReducer,
  cart: cartReducer,
  loading: loadingReducer,
  error: errorsReducer,
});

export default rootReducer;
