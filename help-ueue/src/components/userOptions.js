import React from 'react';

function OptionList(){
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h2> Select Coffee</h2>
            <label>
                <input
                type="radio"
                value="option1"
                name="Arabica"
                checked={selectedOption === 'option1'}
                onChange={handleRadioChange}
                />
                Arabica
            </label>

            <label>
                <input
                    type="radio"
                    value="option2"
                    name="Robusta"
                    checked={selectedOption === 'option2'}
                    onChange={handleRadioChange}
                />
                Robusta
            </label>

            <label>
                <input
                    type="radio"
                    value="option3"
                    name="Liberica"
                    checked={selectedOption === 'option3'}
                    onChange={handleRadioChange}
                />
                Liberica
            </label>

            <label>
                <input
                    type="radio"
                    value="option4"
                    name="Excelsa"
                    checked={selectedOption === 'option4'}
                    onChange={handleRadioChange}
                />
                Excelsa
            </label>
        </div>
    )
}







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
