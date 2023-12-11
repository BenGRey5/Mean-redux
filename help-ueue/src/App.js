// App.js
import React, { useState } from 'react';
import ItemList from './components/coffeeList.js';
import OptionList from './components/userOptions.js';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Arabica Light Roast', description: 'Imported from Nicaragua', quantity: 130 },
    { id: 2, name: 'Robusta Medium Roast', description: 'Imported from Brazil', quantity: 130 },
    { id: 3, name: 'Liberica Light Roast', description: 'Imported from Philippines', quantity: 130 },
    { id: 4, name: 'Excelsa Dark Roast', description: 'Imported from South America', quantity: 130 },
  ]);

  const [showInventory, setShowInventory] = useState(true);

  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, { ...newItem, id: Date.now() }]);
  };

  const updateItem = (itemId, updatedItem) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, ...updatedItem } : item
    ));
  };

  const deleteItem = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const sellItem = (itemId) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    ));
  };

  const restockItem = (coffeeDetails) => {
    setShowInventory(false); // Hide current inventory when restocking
    // Add a new item for each restock option
    setItems(prevItems => [...prevItems, { ...coffeeDetails, id: Date.now() }]);
  };

  const handleCancelRestock = () => {
    setShowInventory(true); // Show inventory when restock is canceled
  };

  return (
    <div className="App">
      <h1>The Mean Bean</h1>
      <OptionList onAddItem={restockItem} onCancelRestock={handleCancelRestock} />
      {showInventory && (
        <ItemList
          items={items}
          onSell={sellItem}
          onDelete={deleteItem}
          onUpdate={updateItem}
        />
      )}
    </div>
  );
}

export default App;
