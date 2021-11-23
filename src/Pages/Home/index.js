import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import I18n from 'i18n-js';
import React, { Component } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';
// import { CartContext } from '../../context/cartContext';
import { loadProductsAction } from '../../actions/productsActions';
import {
  loadCartAction,
  addToCartAction,
  updateCartAction,
  deleteCartAction,
} from '../../actions/cartActions';

class Home extends Component {
  state = {
    status: [],
  };

  async componentDidMount() {
    const { loadProducts, loadCart } = this.props;
    loadProducts();
    loadCart();
  }

  render() {
    const {
      localeData,
      themeData,
      productsData,
      cartData,
      addToCart,
      updateCart,
      deleteItem,
    } = this.props;
    console.log('localeData', localeData);
    console.log('themeData', themeData);
    console.log('productsData', productsData);

    const { error, status } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.props.changeTheme('dark');
          }}
        >
          Change Theme
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.changeLocale('fr');
          }}
        >
          Change Locale
        </button>
        {productsData.data.map((item) => {
          const cartItem = cartData.data.find((x) => x.id === item.id);
          return (
            <Card
              key={item.id}
              sx={{ display: 'flex', margin: 2, minHeight: 200 }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.image}
                alt={item.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Box
                    component="div"
                    overflow="hidden"
                    whiteSpace="pre-line"
                    textOverflow="ellipsis"
                    height={30}
                  >
                    <Typography component="div" variant="h5">
                      {item.title}
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    overflow="hidden"
                    whiteSpace="pre-line"
                    textOverflow="ellipsis"
                    height={60}
                  >
                    <Typography
                      sx={{
                        overflow: 'hidden',
                      }}
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  <Rating
                    name="read-only"
                    value={item.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    component="div"
                  >
                    {I18n.toCurrency(item.price)}
                  </Typography>
                  {cartItem && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {cartItem.quantity <= 1 ? (
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                          onClick={() => {
                            deleteItem(cartItem);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                          onClick={() => {
                            updateCart({
                              ...cartItem,
                              quantity: cartItem.quantity - 1,
                            });
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                      )}
                      <Typography component="div" variant="h5">
                        {cartItem.quantity}
                      </Typography>
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2 }}
                        onClick={() => {
                          updateCart({
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                          });
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  )}
                  {!cartItem && (
                    <Button
                      disabled={status.some(
                        (x) => x.id === item.id && x.status === 'Loading',
                      )}
                      variant="contained"
                      onClick={() => addToCart(item)}
                    >
                      Add To Cart
                    </Button>
                  )}
                </CardContent>
              </Box>
            </Card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  localeData: store.locale,
  themeData: store.theme,
  productsData: store.products,
  cartData: store.cart,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (payload) => dispatch({ type: 'change_theme', payload }),
  changeLocale: (payload) => dispatch({ type: 'change_locale', payload }),
  loadProducts: () => loadProductsAction()(dispatch),
  loadCart: () => loadCartAction()(dispatch),
  addToCart: (item) => addToCartAction(item)(dispatch),
  updateCart: (item) => updateCartAction(item)(dispatch),
  deleteItem: (item) => deleteCartAction(item)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
