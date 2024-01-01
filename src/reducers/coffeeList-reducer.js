const initialState = {
    1: { name: 'Arabica Light Roast', description: 'Imported from Nicaragua $9.99 per pound', quantity: 130, showDescription: false },
    2: { name: 'Robusta Medium Roast', description: 'Imported from Brazil $10.99 per pound', quantity: 130, showDescription: false },
    3: { name: 'Liberica Light Roast', description: 'Imported from Philippines $8.99 per pound', quantity: 130, showDescription: false },
    4: { name: 'Excelsa Dark Roast', description: 'Imported from South America $11.99 per pound', quantity: 130, showDescription: false },
};

const coffeeListReducer = (state = initialState, action) => {
    const { type, id, names, description, quantity } = action;

    switch (type) {
        case 'INITIALIZE_COFFEE_LIST':
            return { ...action.initialState };

        case 'ADD_COFFEE_ITEM':
            return [...state, action.payload];

        case 'ADD_ITEM':
            return {
                ...state,
                [id]: {
                    names,
                    description,
                    quantity,
                },
            };

        case 'TOGGLE_DESCRIPTION':
            return {
                ...state,
                [id]: {
                    ...state[id],
                    showDescription: !state[id]?.showDescription,
                },
            };

        case 'UPDATE_ITEM':
            if (state[id]) {
                return {
                    ...state,
                    [id]: {
                        names,
                        description,
                        quantity,
                    },
                };
            }
            return state;

        case 'SELL_ITEM':
            if (state[id] && state[id].quantity > 0) {
                return {
                    ...state,
                    [id]: {
                        ...state[id],
                        quantity: state[id].quantity - 1,
                    },
                };
            }
            return state;

        case 'DELETE_ITEM':
            const newState = { ...state };
            delete newState[id];
            return newState;

        default:
            return state;
    }
};

export default coffeeListReducer;


