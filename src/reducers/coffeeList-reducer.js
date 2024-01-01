const initialState = {};

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


