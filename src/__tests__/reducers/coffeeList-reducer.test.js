import coffeeListReducer from "../reducers/coffeeListReducer.js"

describe('coffeeListReducer', () => {
    test('Should return default state if there is no action type passed into the reducer', () => {
        expect(ticketListReducer({}, { type: null})).toEqual({});
    });
});