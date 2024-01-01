import { createStore, combineReducers } from 'redux';
import coffeeListReducer from './coffeeList-reducer';

const rootReducer = combineReducers({
    coffeeList: coffeeListReducer,
    // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;