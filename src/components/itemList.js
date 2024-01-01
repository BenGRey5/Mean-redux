import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeCoffeeList, deleteItem, updateItem, sellItem, toggleDescription } from '../reducers/actions';
import Item from './item';

function ItemList({
    items,
    onSell,
    onDelete,
    onUpdate,
    onDescribe,
    selectItem,
    addItem,
    initializeCoffeeList,
    deleteItem,
    updateItem,
    sellItem,
    toggleDescription,
}) {
    useEffect(() => {
        // Assuming you have some initial data for the coffee list
        const initialCoffeeList = {
            1: { name: 'Arabica Light Roast', description: 'Imported from Nicaragua $9.99 per pound', quantity: 130 },
            2: { name: 'Robusta Medium Roast', description: 'Imported from Brazil $10.99 per pound', quantity: 130 },
            3: { name: 'Liberica Light Roast', description: 'Imported from Philippines', quantity: 130 },
            4: { name: 'Excelsa Dark Roast', description: 'Imported from South America', quantity: 130 },
            // Add more initial data as needed
        };

        // Dispatch the action to initialize the coffee list
        initializeCoffeeList(initialCoffeeList);
    }, [initializeCoffeeList]);

    const handleSell = (id) => {
        // Dispatch the action to toggle description
        toggleDescription(id);
        // Dispatch the action to sell the item
        sellItem(id);
    };

    const handleDelete = (id) => {
        // Dispatch the action to toggle description
        toggleDescription(id);
        // Dispatch the action to delete the item
        deleteItem(id);
    };

    const handleUpdate = (item) => {
        // Dispatch the action to update the item
        updateItem(item);
        // Your existing logic for onUpdate (if needed)
        // onUpdate(item);
    };

    return (
        <div className="App">
            <h1>The Mean Bean</h1>
            {Object.values(items).map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onSell={handleSell}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                    onDescribe={onDescribe} // Make sure to pass onDescribe if needed
                    selectItem={selectItem}  // Pass down selectItem here
                    addItem={addItem}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: state.coffeeList,
});

export default connect(mapStateToProps, {
    initializeCoffeeList,
    deleteItem,
    updateItem,
    sellItem,
    toggleDescription,
})(ItemList);
