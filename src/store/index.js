import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer from './reducers/category.reducer';
import productsReducer from './reducers/products.reducer';
import cartReducer from './reducers/cart.reducer';
import orderReducer from './reducers/order.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    cart: cartReducer,
    order: orderReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));