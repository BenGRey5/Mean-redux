export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
});

export const deletItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id
});

export const updateItem = (item) => ({
    type: 'UPDATE_ITEM',
    payload: item
});

export const sellItem = (id) => ({
    type: 'SELL_ITEM',
    payload: id
});
