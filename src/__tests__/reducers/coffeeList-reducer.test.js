import coffeeListReducer from "../reducers/coffeeListReducer.js";
import { initializeCoffeeList } from "../actions";

describe('coffeeListReducer', () => {
    test('Should return default state if there is no action type passed into the reducer', () => {
        expect(coffeeListReducer({}, { type: null })).toEqual({});
    });

    test('Should initialize the coffee list with the provided initial state', () => {
        const initialState = {
            1: { names: 'Arabica', description: 'Imported from Nicaragua', quantity: 10 },
            2: { names: 'Robusta', description: 'Imported from Brazil', quantity: 20 },
        };

        expect(coffeeListReducer({}, initializeCoffeeList(initialState))).toEqual(initialState);
    });

    // Add more tests for other action types and logic
});