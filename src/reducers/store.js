
import { createStore, combineReducers, compose } from 'redux';
import coffeeListReducer from './coffeeList-reducer';

const rootReducer = combineReducers({
    coffeeList: coffeeListReducer,
    // Add other reducers here if needed
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;











// import { createStore, combineReducers, compose } from 'redux';
// import coffeeListReducer from './coffeeList-reducer';

// const rootReducer = combineReducers({
//     coffeeList: coffeeListReducer,
//     // Add other reducers here if needed
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers());

// export default store;


