

const initialState = {
    items: [
        {
            id: 1,
            name: 'Arabica Light Roast',
            description: 'Arabica is a light roast imported from Nicaragua costing $9.99 per pound. It is renowned for its exquisite flavour, which is frequently described as sweeter and softer than other coffee species',
            form3Description: '',
            quantity: 130,
            info: 'Imported from Nicaragua $9.99 per pound.',
            showDescription: false
        },
        {
            id: 2,
            name: 'Robusta Medium Roast',
            description: 'Robusta is a medium roast imported from Brazil costing $10.99 per pound. It is described as perfumey with notes of fruit and sugar tones.',
            form3Description: '',
            quantity: 130,
            info: 'Imported from Brazil $10.99 per pound',
            showDescription: false
        },
        {
            id: 3,
            name: 'Liberica Light Roast',
            description: 'Liberica is a light roast imported from the Philippines costing $8.99 per pound. Its almond-shaped beans have an exceptional aroma, almost floral and fruity, while its flavor is full and slightly smokey.',
            form3Description: '',
            quantity: 130,
            info: 'Imported from Philippines $8.99 per pound',
            showDescription: false
        },
        {
            id: 4,
            name: 'Excelsa Dark Roast',
            description: 'Excelsa is a dark roast imported from South America costing $11.99 per pound. Excelsa has a distinctive tart, fruity, dark, mysterious taste. In blends, it enhances the middle and back palate and lingering finish of the coffee, giving the cup more substance and power.',
            form3Description: '',
            quantity: 130,
            info: 'Imported from South America $11.99 per pound',
            showDescription: false
        },
    ],
    selectedItem: null,
    selectedDescription: '',
    selectedForm3Description: '',
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
            const selectedItem = payload;
            const selectedDescription = selectedItem ? selectedItem.description : '';
            return {
                ...state,
                selectedItem: { ...selectedItem, info: selectedItem ? selectedItem.info : '' },
                selectedDescription,
                selectedForm3Description: selectedItem ? selectedItem.form3Description : '',
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















// const initialState = {
//     items: [
//         {
//             id: 1,
//             name: 'Arabica Light Roast',
//             description: 'Imported from Nicaragua $9.99 per pound. Smooth and aromatic.',
//             form3Description: 'Special notes for form3 about Arabica Light Roast.',
//             quantity: 130,
//             showDescription: false
//         },
//         {
//             id: 2,
//             name: 'Robusta Medium Roast',
//             description: 'Imported from Brazil $10.99 per pound',
//             form3Description: 'Special notes for form3 about  Robusta',
//             quantity: 130,
//             showDescription: false
//         },
//         {
//             id: 3,
//             name: 'Liberica Light Roast',
//             description: 'Imported from Philippines $8.99 per pound',
//             form3Description: 'Special notes for form 3 about Liberica',
//             quantity: 130,
//             showDescription: false
//         },
//         {
//             id: 4,
//             name: 'Excelsa Dark Roast',
//             description: 'Imported from South America $11.99 per pound',
//             form3Description: 'special notes for form3 Excelsa',
//             quantity: 130,
//             showDescription: false
//         },
//     ],
//     selectedItem: null,
//     selectedDescription: '',
//     form1visible: false,
//     form2visible: false,
//     form3visible: false,
// };


// const coffeeListReducer = (state = initialState, action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case 'ADD_ITEM':
//             return {
//                 ...state,
//                 items: [...state.items, payload],
//             };

//         case 'DELETE_ITEM':
//             return {
//                 ...state,
//                 items: state.items.filter((item) => item.id !== payload),
//             };

//         case 'TOGGLE_DESCRIPTION':
//             return {
//                 ...state,
//                 selectedItem: payload,
//                 selectedDescription: '',
//                 form3visible: !state.form3visible,
//             };

//         case 'UPDATE_ITEM':
//             return {
//                 ...state,
//                 items: state.items.map((item) => (item.id === payload.id ? payload : item)),
//             };

//         case 'SELL_ITEM':
//             return {
//                 ...state,
//                 items: state.items.map((item) => (item.id === payload && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item)),
//             };

//         case 'SELECT_ITEM':
//             const selectedItem = payload;
//             const selectedDescription = selectedItem ? selectedItem.description : '';
//             return {
//                 ...state,
//                 selectedItem,
//                 selectedDescription,
//                 selectedForm3Description: selectedItem ? selectedItem.form3Description : '',  // Set form3Description
//                 form1visible: false,
//                 form2visible: false,
//                 form3visible: true,
//             };


//         case 'TOGGLE_FORM':
//             return {
//                 ...state,
//                 form1visible: payload === 'form1' ? !state.form1visible : false,
//                 form2visible: payload === 'form2' ? !state.form2visible : false,
//                 form3visible: payload === 'form3' ? !state.form3visible : false,
//             };

//         case 'SET_DESCRIPTION':
//             return {
//                 ...state,
//                 selectedDescription: payload,
//             };

//         default:
//             return state;
//     }
// };

// export default coffeeListReducer;





