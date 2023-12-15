import React, { useState } from "react";
import ItemList from "./components/coffeeList.js";
import OptionList from "./components/userOptions.js";
import { connect } from "react-redux";
function App() {
    const [items, setItems] = useState([
        { id: 1, name: "Arabica Light Roast", description: "Imported from Nicaragua $9.99 per pound", quantity: 130 },
        { id: 2, name: "Robusta Medium Roast", description: "Imported from Brazil $10.99 per pound", quantity: 130 },
        { id: 3, name: "Liberica Light Roast", description: "Imported from Philippines $8.99 per pound", quantity: 130 },
        { id: 4, name: "Excelsa Dark Roast", description: "Imported from South America $11.99 per pound", quantity: 130 },
    ]);

    const [newItem, setNewItem] = useState({ name: "", description: "", quantity: 0 });

    const [form1visible, setForm1Visible] = useState(false);

    // const addItem = (newItem) => {
    //     setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now() }]);
    // };
    handleAddItem = (addItem) => {
        const { dispatch } = this.props;
        const { id, brand, roast, issue } = addItem;
        const action = {
            type: "Add_Item",
            id: id,

        }
    }

    const updateItem = (itemId, updatedItem) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, ...updatedItem } : item)));
    };

    const deleteItem = (itemId) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const sellItem = (itemId) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item)));
    };
    const toggle = () => {
        if (form1visible) {
            setForm1Visible(false);
        } else {
            setForm1Visible(true);
        }
    };
    if (form1visible) {
        return (
            <>
                <OptionList onAddItem={addItem} />

                <button onClick={() => toggle()}>Return</button>
            </>
        );
    } else {
        return (
            <div className="App">
                <h1>The Mean Bean</h1>
                <button onClick={() => toggle()}>Order</button>
                {/* <OptionList onAddItem={addItem} /> */}
                <ItemList items={items} onSell={sellItem} onDelete={deleteItem} onUpdate={updateItem} />
            </div>
        );
    }
}
App = connect()(App)
export default App;


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