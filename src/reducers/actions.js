
export const initializeCoffeeList = (initialState) => ({
    type: 'INITIALIZE_COFFEE_LIST',
    initialState,
});

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
});

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id,
});

export const toggleDescription = (id) => ({
    type: 'TOGGLE_DESCRIPTION',
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

export const selectItem = (item) => ({
    type: 'SELECT_ITEM',
    payload: item,
});

export const toggleForm = (form) => ({
    type: 'TOGGLE_FORM',
    payload: form,
});

export const setDescription = (description) => ({
    type: 'SET_DESCRIPTION',
    payload: description,
});

export const addCoffeeItem = (coffeeDetails) => ({
    type: 'ADD_COFFEE_ITEM',
    payload: coffeeDetails,
});


