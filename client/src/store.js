import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { editUserReducer } from './reducers/userReducers';



const finalReducer = combineReducers({
    editUserReducer: editUserReducer
});

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
    // cartReducer: {
    //     cartItems: cartItems
    // },
    editUserReducer: {
        currentUser: currentUser
    }
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;