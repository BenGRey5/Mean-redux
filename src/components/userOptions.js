import React, { useState } from "react";
import ItemList from "./components/coffeeList.js";
import OptionList from "./components/userOptions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function App(props) {
    const [items, setItems] = useState([
        { id: 1, name: "Arabica Light Roast", description: "Imported from Nicaragua $9.99 per pound", quantity: 130 },
        { id: 2, name: "Robusta Medium Roast", description: "Imported from Brazil $10.99 per pound", quantity: 130 },
        { id: 3, name: "Liberica Light Roast", description: "Imported from Philippines $8.99 per pound", quantity: 130 },
        { id: 4, name: "Excelsa Dark Roast", description: "Imported from South America $11.99 per pound", quantity: 130 },
    ]);

    const [addItemItem, setNewItem] = useState({ name: "", description: "", quantity: 0 });
    const [editing, setEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [form1visible, setForm1Visible] = useState(false);

    const handleAddItem = (addItem) => {
        const { dispatch } = props;
        const { id, name, description, quantity } = addItem;

        const action = {
            type: "Add_Item",
            id: id,
            name: name,
            description: description,
            quantity: quantity
        };

        dispatch(action);

        setEditing(false);
        setSelectedItem(null);
    }

    const handleUpdateItem = (id) => {
        const selectedTicket = items.find((item) => item.id === id);
        setSelectedItem(selectedTicket);
    }

    const handleDeleteItem = (id) => {
        const { dispatch } = props;
        const action = {
            type: "Delete_Item",
            id: id
        }
        dispatch(action);
        setSelectedItem(null);
    }

    const sellItem = (itemId) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item)));
    };

    const toggle = () => {
        setForm1Visible(!form1visible);
    };

    if (form1visible) {
        return (
            <>
                <OptionList onAddItem={handleAddItem} />
                <button onClick={() => toggle()}>Return</button>
            </>
        );
    } else {
        return (
            <div className="App">
                <h1>The Mean Bean</h1>
                <button onClick={() => toggle()}>Order</button>
                <ItemList items={items} onSell={sellItem} onDelete={handleDeleteItem} onUpdate={handleUpdateItem} />
            </div>
        );
    }
}

App.propTypes = {
    App: PropTypes.object
}

const mapStateToProps = state => {
    return {
        mainItemList: state
    }
}

App = connect(mapStateToProps)(App);
export default App;

ffff



// import React, { useState } from 'react';

// function OptionList({ onAddItem }) {
//     const [selectedOption, setSelectedOption] = useState('');

//     const handleRadioChange = (event) => {
//         const selectedCoffee = event.target.value;
//         setSelectedOption(selectedCoffee);

//         // Assuming each coffee type has specific details
//         const coffeeDetails = {
//             'Arabica': { name: 'Arabica Light Roast', description: 'Imported from Nicaragua', quantity: 130 },
//             'Robusta': { name: 'Robusta Medium Roast', description: 'Imported from Brazil', quantity: 130 },
//             'Liberica': { name: 'Liberica Light Roast', description: 'Imported from Philippines', quantity: 130 },
//             'Excelsa': { name: 'Excelsa Dark Roast', description: 'Imported from South America', quantity: 130 },
//         };

//         // Add the corresponding item when a radio button is selected
//         onAddItem(coffeeDetails[selectedCoffee]);
//     };

//     return (
//         <div>
//             <h2>Select Coffee</h2>
//             <label>
//                 <input
//                     type="radio"
//                     value="Arabica"
//                     name="coffeeOptions"
//                     checked={selectedOption === 'Arabica'}
//                     onChange={handleRadioChange}
//                 />
//                 Arabica
//             </label>

//             <label>
//                 <input
//                     type="radio"
//                     value="Robusta"
//                     name="coffeeOptions"
//                     checked={selectedOption === 'Robusta'}
//                     onChange={handleRadioChange}
//                 />
//                 Robusta
//             </label>

//             <label>
//                 <input
//                     type="radio"
//                     value="Liberica"
//                     name="coffeeOptions"
//                     checked={selectedOption === 'Liberica'}
//                     onChange={handleRadioChange}
//                 />
//                 Liberica
//             </label>

//             <label>
//                 <input
//                     type="radio"
//                     value="Excelsa"
//                     name="coffeeOptions"
//                     checked={selectedOption === 'Excelsa'}
//                     onChange={handleRadioChange}
//                 />
//                 Excelsa
//             </label>
//             <div>
//                 Selected option: {selectedOption}
//             </div>
//         </div>
//     );
// }

// export default OptionList;