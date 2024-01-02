import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addCoffeeItem, toggleForm } from '../reducers/actions';

function OptionList({ isVisible, selectedOption, form1visible, addItem, toggleForm }) {
    const dispatch = useDispatch();
    const [showOrderButtons, setShowOrderButtons] = useState(false);

    const handleOrderCoffeeButtonClick = () => {
        console.log('Order Coffee button clicked!');
        // Toggle the visibility of order buttons
        setShowOrderButtons((prevShowOrderButtons) => !prevShowOrderButtons);

        // Dispatch an action to toggle the visibility of the new form
        dispatch(toggleForm('newForm'));
    };


    const handleOrderButtonClick = (action) => {
        console.log(`Order ${action} clicked!`);
    };

    return (
        <div>
            <button onClick={handleOrderCoffeeButtonClick}>Order Coffee</button>

            <div style={{ display: isVisible ? 'block' : 'none' }}>
                {/* ... (other content) */}

                {/* Render order buttons if showOrderButtons is true */}
                {showOrderButtons ? (
                    <div>
                        <button onClick={() => handleOrderButtonClick('Option1')}>Order Option 1</button>
                        <button onClick={() => handleOrderButtonClick('Option2')}>Order Option 2</button>
                        <button onClick={() => handleOrderButtonClick('Option3')}>Order Option 3</button>
                        <button onClick={() => handleOrderButtonClick('Option4')}>Order Option 4</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    selectedOption: state.coffeeList.selectedOption,
    form1visible: state.coffeeList.form1visible,
});

export default connect(mapStateToProps, { toggleForm })(OptionList);






// import React from 'react';
// import { connect, useDispatch } from 'react-redux';
// import { addCoffeeItem, toggleForm } from '../reducers/actions';

// function OptionList({ isVisible, selectedOption, form1visible, addItem }) {
//     console.log('for1visible:', form1visible);
//     const dispatch = useDispatch();

//     const coffeeDetails = {
//         'Arabica': { name: 'Arabica Light Roast', description: 'Imported from Nicaragua', quantity: 130, info: "dogma", },
//         'Robusta': { name: 'Robusta Medium Roast', description: 'Imported from Brazil', quantity: 130, info: "dogma", },
//         'Liberica': { name: 'Liberica Light Roast', description: 'Imported from Philippines', quantity: 130, info: "dogma", },
//         'Excelsa': { name: 'Excelsa Dark Roast', description: 'Imported from South America', quantity: 130, info: "dogma", },
//     };

//     const handleRadioChange = (event) => {
//         const selectedCoffee = event.target.value;
//         dispatch(addCoffeeItem(coffeeDetails[selectedCoffee]));
//     };

//     const handleForm1ButtonClick = () => {
//         // Toggle the visibility of form1
//         dispatch(toggleForm('form1'));
//     };

//     const handleAddItemButtonClick = (coffeeType) => {
//         // Add the selected coffee item to the list
//         dispatch(addItem(coffeeDetails[coffeeType]));
//     };

//     return (
//         <div style={{ display: isVisible ? 'block' : 'none' }}>
//             <h2>Select Coffee</h2>
//             {Object.keys(coffeeDetails).map((coffeeType) => (
//                 <label key={coffeeType}>
//                     <input
//                         type="radio"
//                         value={coffeeType}
//                         name="coffeeOptions"
//                         checked={selectedOption === coffeeType}
//                         onChange={handleRadioChange}
//                     />
//                     {coffeeType}
//                 </label>
//             ))}
//             <div>
//                 Selected option: {selectedOption}
//             </div>
//             {/* Button to toggle form1 visibility */}
//             <button onClick={handleForm1ButtonClick}>Show Form 1</button>
//             {/* Form 1 with buttons to add items */}
//             {form1visible && (
//                 <div>
//                     <h2>Form 1</h2>
//                     <button onClick={() => handleAddItemButtonClick('Arabica')}>Add Arabica</button>
//                     <button onClick={() => handleAddItemButtonClick('Robusta')}>Add Robusta</button>
//                     <button onClick={() => handleAddItemButtonClick('Liberica')}>Add Liberica</button>
//                     <button onClick={() => handleAddItemButtonClick('Excelsa')}>Add Excelsa</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// const mapStateToProps = (state) => ({
//     selectedOption: state.coffeeList.selectedOption,
//     form1visible: state.coffeeList.form1visible,
// });

// export default connect(mapStateToProps)(OptionList);



