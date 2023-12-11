// userOptions.js
import React, { useState } from 'react';

function OptionList({ onAddItem }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleRadioChange = (event) => {
        const selectedCoffee = event.target.value;
        setSelectedOption(selectedCoffee);
    };

    const handleRestockButtonClick = () => {
        setShowForm(true);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Assuming each coffee type has specific details
        const coffeeDetails = {
            'Arabica': { name: 'Arabica Light Roast', description: 'Imported from Nicaragua', quantity: 130 },
            'Robusta': { name: 'Robusta Medium Roast', description: 'Imported from Brazil', quantity: 130 },
            'Liberica': { name: 'Liberica Light Roast', description: 'Imported from Philippines', quantity: 130 },
            'Excelsa': { name: 'Excelsa Dark Roast', description: 'Imported from South America', quantity: 130 },
        };

        // Add the corresponding item when the form is submitted
        onAddItem(coffeeDetails[selectedOption]);

        // Reset state and hide the form
        setSelectedOption('');
        setShowForm(false);
    };

    const handleFormCancel = () => {
        // Reset state and hide the form when canceled
        setSelectedOption('');
        setShowForm(false);
    };

    return (
        <div>
            <h2>Select Coffee for Restock</h2>
            <button onClick={handleRestockButtonClick}>Restock</button>

            {showForm && (
                <form onSubmit={handleFormSubmit}>
                    <label>
                        <input
                            type="radio"
                            value="Arabica"
                            name="coffeeOptions"
                            checked={selectedOption === 'Arabica'}
                            onChange={handleRadioChange}
                        />
                        Arabica
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Robusta"
                            name="coffeeOptions"
                            checked={selectedOption === 'Robusta'}
                            onChange={handleRadioChange}
                        />
                        Robusta
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Liberica"
                            name="coffeeOptions"
                            checked={selectedOption === 'Liberica'}
                            onChange={handleRadioChange}
                        />
                        Liberica
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Excelsa"
                            name="coffeeOptions"
                            checked={selectedOption === 'Excelsa'}
                            onChange={handleRadioChange}
                        />
                        Excelsa
                    </label>

                    <div>
                        <button type="submit">Restock</button>
                        <button type="button" onClick={handleFormCancel}>Cancel</button>
                    </div>
                </form>
            )}

            <div>
                Selected option: {selectedOption}
            </div>
        </div>
    );
}

export default OptionList;









// function OptionList({stockArabica, stockRobusta, stockLiberica, stockExcelsa})





// function Item({ item, onSell, onRestock, onDelete }) {
//     return (
//         <div>
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//             <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Out of Stock'}</p>
//             <button onClick={() => onSell(item.id)}>Sell</button>
//             <button onClick={() => onRestock(item.id, 130)}>Restock</button>
//             <button onClick={() => onDelete(item.id)}>Delete</button>
//         </div>
//     );
// }

// export default Item;
