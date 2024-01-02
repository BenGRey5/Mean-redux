import coffeeListReducer from './coffeeList-reducer';
import * as actions from './';

describe('coffeeListReducer', () => {
    it('should handle ADD_ITEM action', () => {
        const initialState = {
            items: [],
        };

        const itemToAdd = {
            id: 1,
            name: 'Test Item',
        };

        const action = actions.addItem(itemToAdd);
        const newState = coffeeListReducer(initialState, action);

        expect(newState.items).toHaveLength(1);
        expect(newState.items[0]).toEqual(itemToAdd);
    });

    it('should handle DELETE_ITEM action', () => {
        const initialState = {
            items: [
                { id: 1, name: 'Item1' },
                { id: 2, name: 'Item2' },
            ],
        };

        const itemIdToDelete = 1;

        const action = actions.deleteItem(itemIdToDelete);
        const newState = coffeeListReducer(initialState, action);

        expect(newState.items).toHaveLength(1);
        expect(newState.items[0].id).toEqual(2);
    });

    it('should handle TOGGLE_DESCRIPTION action', () => {
        const initialState = {
            form3visible: false,
        };

        const itemIdToToggle = 1;

        const action = actions.toggleDescription(itemIdToToggle);
        const newState = coffeeListReducer(initialState, action);

        expect(newState.form3visible).toBe(true);
    });