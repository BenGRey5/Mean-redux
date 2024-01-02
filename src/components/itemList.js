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
    // Add onOrder handler
    onOrder,
}) {
    return (
        <div className="App">
            {(() => {
                if (form1visible) {
                    // Render your form 1 content here
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
                                    onOrder={onOrder}  // Pass onOrder prop to Item component
                                />
                            ))}
                        </div>
                    );
                } else if (form2visible) {
                    // Render your form 2 content here
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
                    // Render your default content
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
    selectedForm3Description: state.coffeeList.selectedForm3Description,  // Add this line
});
const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (id) => dispatch(deleteItem(id)),
    updateItem: (item) => dispatch(updateItem(item)),
    sellItem: (id) => dispatch(sellItem(id)),
    toggleDescription: (id) => dispatch(toggleDescription(id)),
    selectItem: (item) => dispatch(selectItem(item)),
    toggleForm: (form) => dispatch(toggleForm(form)),
    setDescription: (description) => dispatch(setDescription(description)),
    orderItem: (item) => dispatch(orderItem(item)), // Define orderItem in mapDispatchToProps
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








