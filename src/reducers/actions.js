export const initializeCoffeeList = (initialState) => ({
    type: 'INITIALIZE_COFFEE_LIST',
    initialState,
});

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    ...item, // Spread the item properties
});

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id,
});

export const updateItem = (item) => ({
    type: 'UPDATE_ITEM',
    payload: item,
});

export const sellItem = (id) => ({
    type: 'SELL_ITEM',
    payload: id,
});
export const addCoffeeItem = (item) => ({
    type: 'ADD_COFFEE_ITEM',
    payload: item,
});

