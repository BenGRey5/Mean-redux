const initialState = {
    items: [
        { id: 1, name: 'Arabica Light Roast', description: 'Imported from Nicaragua $9.99 per pound', quantity: 130, showDescription: false },
        { id: 2, name: 'Robusta Medium Roast', description: 'Imported from Brazil $10.99 per pound', quantity: 130, showDescription: false },
        { id: 3, name: 'Liberica Light Roast', description: 'Imported from Philippines $8.99 per pound', quantity: 130, showDescription: false },
        { id: 4, name: 'Excelsa Dark Roast', description: 'Imported from South America $11.99 per pound', quantity: 130, showDescription: false },
    ],
    selectedItem: null,
    selectedDescription: '',
    form1visible: false,
    form2visible: false,
    form3visible: false,
};


const coffeeListReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, payload],
            };

        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== payload),
            };

        case 'TOGGLE_DESCRIPTION':
            return {
                ...state,
                selectedItem: payload,
                selectedDescription: '',
                form3visible: !state.form3visible,
            };

        case 'UPDATE_ITEM':
            return {
                ...state,
                items: state.items.map((item) => (item.id === payload.id ? payload : item)),
            };

        case 'SELL_ITEM':
            return {
                ...state,
                items: state.items.map((item) => (item.id === payload && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item)),
            };

        case 'SELECT_ITEM':
            return {
                ...state,
                selectedItem: payload,
                form1visible: false,
                form2visible: false,
                form3visible: true,
            };

        case 'TOGGLE_FORM':
            return {
                ...state,
                form1visible: payload === 'form1' ? !state.form1visible : false,
                form2visible: payload === 'form2' ? !state.form2visible : false,
                form3visible: payload === 'form3' ? !state.form3visible : false,
            };

        case 'SET_DESCRIPTION':
            return {
                ...state,
                selectedDescription: payload,
            };

        default:
            return state;
    }
};

export default coffeeListReducer;