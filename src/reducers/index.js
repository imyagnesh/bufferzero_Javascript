import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import themeReducer from './themeReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  locale: localeReducer,
  theme: themeReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
