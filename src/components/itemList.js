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
} from '../reducers/actions.js';

function ItemList({
    items,
    form1visible,
    form2visible,
    form3visible,
    selectedItem,
    selectedDescription,
    addItem,
    deleteItem,
    updateItem,
    sellItem,
    toggleDescription,
    selectItem,
    toggleForm,
    setDescription,
}) {
    return (
        <div className="App">
            {(() => {
                if (form1visible) {
                    // Render your form 1 content here
                } else if (form2visible) {
                    // Render your form 2 content here
                } else if (form3visible) {
                    // Render your form 3 content here
                } else {
                    return (
                        <>
                            <OptionList />
                            {/* Use the Item component for each item in the list */}
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
                                </div>
                            )}
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
});

export default connect(mapStateToProps, {
    addItem,
    deleteItem,
    updateItem,
    sellItem,
    toggleDescription,
    selectItem,
    toggleForm,
    setDescription,
})(ItemList);
