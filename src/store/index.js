import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer from './reducers/category.reducer';
import productsReducer from './reducers/products.reducer';
import cartReducer from './reducers/cart.reducer';
import orderReducer from './reducers/order.reducer';
import authReducer from './reducers/auth.reducer';
import userReducer from './reducers/user.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    category: categoryReducer,
    product: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
    user: userReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));