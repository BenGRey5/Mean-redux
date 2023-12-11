// import React, { useState } from 'react';

// const FormToggleExample = () => {
//     // State to track which form to display
//     const [showForm1, setShowForm1] = useState(true);

//     // Function to toggle between forms
//     const toggleForm = () => {
//         setShowForm1((prevShowForm1) => !prevShowForm1);
//     };

//     return (
//         <div>
//             <button onClick={toggleForm}>Toggle Form</button>
//             {showForm1 ? (
//                 <Form1 />
//             ) : (
//                 <Form2 />
//             )}
//         </div>
//     );
// };

// const Form1 = () => {
//     return <form>Form 1 content goes here</form>;
// };

// const Form2 = () => {
//     // Include OptionList inside Form2
//     return (
//         <form>
//             <h2>Form 2 content goes here</h2>
//             <OptionList onAddItem={(coffeeDetails) => console.log(coffeeDetails)} />
//         </form>
//     );
// };

// // OptionList component (same as in your previous code)
// function OptionList({ onAddItem }) {
//     const [selectedOption, setSelectedOption] = useState('');

//     const handleRadioChange = (event) => {
//         const selectedCoffee = event.target.value;
//         setSelectedOption(selectedCoffee);

//         const coffeeDetails = {
//             'Arabica': { name: 'Arabica Light Roast', description: 'Imported from Nicaragua', quantity: 130 },
//             'Robusta': { name: 'Robusta Medium Roast', description: 'Imported from Brazil', quantity: 130 },
//             'Liberica': { name: 'Liberica Light Roast', description: 'Imported from Philippines', quantity: 130 },
//             'Excelsa': { name: 'Excelsa Dark Roast', description: 'Imported from South America', quantity: 130 },
//         };

//         onAddItem(coffeeDetails[selectedCoffee]);
//     };

//     return (
//         <div>
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

//             {/* ... (similar code for other coffee options) */}

//             <div>
//                 Selected option: {selectedOption}
//             </div>
//         </div>
//     );
// }

// export default FormToggleExample;
