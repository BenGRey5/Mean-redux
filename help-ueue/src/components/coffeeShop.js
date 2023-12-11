import React from 'react';

function Item({ item, onSell, onRestock, onDelete }) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Out of Stock'}</p>
            <button onClick={() => onSell(item.id)}>Sell</button>
            <button onClick={() => onRestock(item.id, 130)}>Restock</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
}


export default Item;




// function Item({ item, onBuy, onRestock, onDelete }) {
//     return (
//         <div>
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//             <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Out of Stock'}</p>
//             <button onClick={() => onBuy(item.id)}>Buy</button>
//             <button onClick={() => onRestock(item.id, 1)}>Restock by 1</button>
//             <button onClick={() => onDelete(item.id)}>Delete</button>
//         </div>
//     );
// }

// export default Item;