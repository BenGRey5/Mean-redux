import React from 'react';
import { connect } from 'react-redux';
import Item from './item.js';
import OptionList from './optionList.js';
import {
    addItem,
    deleteItem,
    updateItem,
    sellItem,
    toggleDescription,
    selectItem,
    toggleForm,
    setDescription,
    orderItem,
} from '../reducers/actions.js';

// Define coffeeDetails here
const coffeeDetails = {
    'Arabica': { name: 'Arabica Light Roast', description: 'Imported from Nicaragua', quantity: 130, info: "dogma", },
    'Robusta': { name: 'Robusta Medium Roast', description: 'Imported from Brazil', quantity: 130, info: "dogma", },
    'Liberica': { name: 'Liberica Light Roast', description: 'Imported from Philippines', quantity: 130, info: "dogma", },
    'Excelsa': { name: 'Excelsa Dark Roast', description: 'Imported from South America', quantity: 130, info: "dogma", },
};

function ItemList({
    items,
    form1visible,
    form2visible,
    form3visible,
    selectedItem,
    selectedDescription,
    selectedForm3Description,
    addItem,
    deleteItem,
    updateItem,
    sellItem,
    toggleDescription,
    selectItem,
    toggleForm,
    setDescription,
    onOrder,
    dispatch, // Add dispatch prop
}) {
    return (
        <div className="App">
            {(() => {
                if (form1visible) {
                    return (
                        <div className="App">
                            {items.map(item => (
                                <Item
                                    key={item.id}
                                    item={item}
                                    onSell={sellItem}
                                    onDelete={deleteItem}
                                    onUpdate={updateItem}
                                    onDescribe={toggleDescription}
                                    selectItem={selectItem}
                                    onOrder={onOrder}
                                    toggleForm={toggleForm}
                                />
                            ))}
                        </div>
                    );
                } else if (form2visible) {
                    // Render your form 2 content here
                    return (
                        <div>
                            <form>
                                <h2>Form 2</h2>
                                {/* Add radio buttons for Arabica, Robusta, Liberica, Excelsa */}
                                {Object.keys(coffeeDetails).map(coffeeType => (
                                    <label key={coffeeType}>
                                        <input
                                            type="radio"
                                            value={coffeeType}
                                            name="coffeeOptionsForm2"
                                            // You may need to adjust this based on your state or UI requirements
                                            checked={selectedItem && selectedForm3Description === coffeeType}
                                            onChange={(event) => {
                                                // Dispatch action to add corresponding item to form1
                                                dispatch(addItem(coffeeDetails[event.target.value], 'form1'));
                                            }}
                                        />
                                        {coffeeType}
                                    </label>
                                ))}
                            </form>
                        </div>
                    );
                } else if (form3visible) {
                    // Render your form 3 content here
                    return (
                        <div>
                            {selectedItem && (
                                <div>
                                    {form3visible && (
                                        <button onClick={() => toggleForm('form3')}>Return</button>
                                    )}
                                    <h2>{selectedItem.name}</h2>
                                    <form>
                                        {/* Your radio buttons and other form elements for default content */}
                                    </form>
                                    <p>{selectedDescription}</p>
                                    {form3visible && (
                                        <p>{selectedForm3Description}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                } else {
                    return (
                        <>
                            <OptionList />
                            {items.map(item => (
                                <Item
                                    key={item.id}
                                    item={item}
                                    onSell={sellItem}
                                    onDelete={deleteItem}
                                    onUpdate={updateItem}
                                    onDescribe={toggleDescription}
                                    selectItem={selectItem}
                                    onOrder={onOrder}
                                    toggleForm={toggleForm}
                                />
                            ))}
                        </>
                    );
                }
            })()}
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: state.coffeeList.items,
    form1visible: state.coffeeList.form1visible,
    form2visible: state.coffeeList.form2visible,
    form3visible: state.coffeeList.form3visible,
    selectedItem: state.coffeeList.selectedItem,
    selectedDescription: state.coffeeList.selectedDescription,
    selectedForm3Description: state.coffeeList.selectedForm3Description,
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (item, form) => dispatch(addItem(item, form)),
    deleteItem: (id) => dispatch(deleteItem(id)),
    updateItem: (item) => dispatch(updateItem(item)),
    sellItem: (id) => dispatch(sellItem(id)),
    toggleDescription: (id) => dispatch(toggleDescription(id)),
    selectItem: (item) => dispatch(selectItem(item)),
    toggleForm: (form) => dispatch(toggleForm(form)),
    setDescription: (description) => dispatch(setDescription(description)),
    orderItem: (item) => dispatch(orderItem(item)),
    dispatch, // Add dispatch prop
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);



// import React from 'react';
// import { connect } from 'react-redux';
// import Item from './item.js';
// import OptionList from './optionList.js';
// import {
//     addItem,
//     deleteItem,
//     updateItem,
//     sellItem,
//     toggleDescription,
//     selectItem,
//     toggleForm,
//     setDescription,
// } from '../reducers/actions.js';

// function ItemList({
//     items,
//     form1visible,
//     form2visible,
//     form3visible,
//     selectedItem,
//     selectedDescription,
//     selectedForm3Description,
//     addItem,
//     deleteItem,
//     updateItem,
//     sellItem,
//     toggleDescription,
//     selectItem,
//     toggleForm,
//     setDescription,
// }) {
//     return (
//         <div className="App">
//             {(() => {
//                 if (form1visible) {
//                     // Render your form 1 content here
//                     return (
//                         <div>
//                             <OptionList />
//                             {items.map(item => (
//                                 <Item
//                                     key={item.id}
//                                     item={item}
//                                     onSell={sellItem}
//                                     onDelete={deleteItem}
//                                     onUpdate={updateItem}
//                                     onDescribe={toggleDescription}
//                                     selectItem={selectItem}
//                                 />
//                             ))}
//                         </div>
//                     );
//                 } else if (form2visible) {
//                     // Render your form 2 content here
//                 } else if (form3visible) {
//                     // Render your form 3 content here
//                     return (
//                         <div>
//                             {selectedItem && (
//                                 <div>
//                                     {form3visible && (
//                                         <button onClick={() => toggleForm('form3')}>Return</button>
//                                     )}
//                                     <h2>{selectedItem.name}</h2>
//                                     <form>
//                                         {/* Your radio buttons and other form elements for default content */}
//                                     </form>
//                                     <p>{selectedDescription}</p>
//                                     {form3visible && (
//                                         <p>{selectedForm3Description}</p>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     );
//                 } else {
//                     // Render your default content
//                     return (
//                         <>
//                             <OptionList />
//                             {items.map(item => (
//                                 <Item
//                                     key={item.id}
//                                     item={item}
//                                     onSell={sellItem}
//                                     onDelete={deleteItem}
//                                     onUpdate={updateItem}
//                                     onDescribe={toggleDescription}
//                                     selectItem={selectItem}
//                                 />
//                             ))}
//                         </>
//                     );
//                 }
//             })()}
//         </div>
//     );
// }

// const mapStateToProps = (state) => ({
//     items: state.coffeeList.items,
//     form1visible: state.coffeeList.form1visible,
//     form2visible: state.coffeeList.form2visible,
//     form3visible: state.coffeeList.form3visible,
//     selectedItem: state.coffeeList.selectedItem,
//     selectedDescription: state.coffeeList.selectedDescription,
//     selectedForm3Description: state.coffeeList.selectedForm3Description,  // Add this line
// });

// export default connect(mapStateToProps, {
//     addItem,
//     deleteItem,
//     updateItem,
//     sellItem,
//     toggleDescription,
//     selectItem,
//     toggleForm,
//     setDescription,
// })(ItemList);








