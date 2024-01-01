import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeCoffeeList, deleteItem, updateItem, sellItem } from '../reducers/actions';
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
}) {
    useEffect(() => {
        // Assuming you have some initial data for the coffee list
        const initialCoffeeList = {
            1: { names: 'Arabica', description: 'Imported from Nicaragua', quantity: 130 },
            2: { names: 'Robusta', description: 'Imported from Brazil', quantity: 130 },
            3: { name: 'Liberica Light Roast', description: 'Imported from Philippines', quantity: 130 },
            4: { name: 'Excelsa Dark Roast', description: 'Imported from South America', quantity: 130 },
            // Add more initial data as needed
        };

        // Dispatch the action to initialize the coffee list
        initializeCoffeeList(initialCoffeeList);
    }, [initializeCoffeeList]);

    const handleSell = (id) => {
        // Dispatch the action to sell the item
        sellItem(id);
        // Your existing logic for onSell (if needed)
        // onSell(id);
    };

    const handleDelete = (id) => {
        // Dispatch the action to delete the item
        deleteItem(id);
        // Your existing logic for onDelete (if needed)
        // onDelete(id);
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
                    selectItem={selectItem}
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
})(ItemList);
