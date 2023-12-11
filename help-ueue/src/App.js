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

  const [newItem, setNewItem] = useState({ name: '', description: '', quantity: 0 })

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



  return (
    <div className="App">
      <h1>The Mean Bean</h1>
      <OptionList onAddItem={addItem} />
      <ItemList
        items={items}
        onSell={sellItem}
        onDelete={deleteItem}
        onUpdate={updateItem}
      />
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import ItemList from './components/coffeeList.js';

// function App() {
//   const [items, setItems] = useState([
//     { id: 1, name: 'Arabica Light Roast', description: 'Imported from Nicaragua', quantity: 130 },
//     { id: 2, name: 'Robusta Medium Roast', description: 'Imported from Brazil', quantity: 130 },
//     { id: 3, name: 'Liberica Light Roast', description: 'Imported from', quantity: 130 },
//     { id: 4, name: 'Excelsa Dark Roast', description: 'Imported from', quantity: 130 },
//   ]);
//   const [newItem, setNewItem] = useState({ name: '', description: '', quantity: 0 })

//   const addItem = (newItem) => {
//     setItems(prevItems => [...prevItems, { ...newItem, id: Date.now() }]);
//   };

//   const updateItem = (itemId, updatedItem) => {
//     setItems(prevItems => prevItems.map(item =>
//       item.id === itemId ? { ...item, ...updatedItem } : item
//     ));
//   };

//   const deleteItem = (itemId) => {
//     setItems(prevItems => prevItems.filter(item => item.id !== itemId));
//   };

//   const buyItem = (itemId) => {
//     setItems(prevItems => prevItems.map(item =>
//       item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
//     ));
//   };

//   const restockItem = (itemId, restockAmount) => {
//     setItems(prevItems => prevItems.map(item =>
//       item.id === itemId ? { ...item, quantity: item.quantity + restockAmount } : item
//     ));
//   };

//   return (
//     <div className="App">
//       <h1>The Mean Bean</h1>
//       <ItemList
//         items={items}
//         onBuy={buyItem}
//         onRestock={restockItem}
//         onDelete={deleteItem}
//         onUpdate={updateItem}
//       />
//     </div>
//   );
// }

// export default App;

