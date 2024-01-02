import React from 'react';

function Item({
    item,
    onSell,
    onDelete,
    onUpdate,
    onDescribe,
    selectItem,
    onOrder,  // Destructure onOrder from props
}) {
    return (
        <div>
            <h2 onClick={() => selectItem && selectItem(item)}>{item.name}</h2>
            <p>Info: {item.info}</p>
            {item.showDescription && (
                <>
                    <p>{item.description}</p>
                </>
            )}
            <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Bag empty'}</p>
            <button onClick={() => onSell(item.id)}>Sell</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
            {/* Add Order button */}
            <button onClick={() => onOrder && onOrder(item)}>Order</button>
        </div>
    );
}

export default Item;





// import React from 'react';

// function Item({ item, onSell, onDelete, onUpdate, onDescribe, selectItem }) {
//     return (
//         <div>
//             <h2 onClick={() => selectItem && selectItem(item)}>{item.name}</h2>
//             {/* Always display the "info" property */}
//             <p>Info: {item.info}</p>
//             {item.showDescription && (
//                 <>
//                     <p>{item.description}</p>
//                 </>
//             )}
//             <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Bag empty'}</p>
//             <button onClick={() => onSell(item.id)}>Sell</button>
//             <button onClick={() => onDelete(item.id)}>Delete</button>
//         </div>
//     );
// }

// export default Item;









