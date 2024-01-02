import React from 'react';

function Item({
    item,
    onSell,
    onDelete,
    onUpdate,
    onDescribe,
    selectItem,
    onOrder,
    toggleForm,  // Destructure toggleForm from props
}) {
    const handleOrderButtonClick = () => {
        if (onOrder) {
            onOrder(item);
            toggleForm('form2'); // Toggle to form2 after ordering
        }
    };

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
            {/* Modify Order button */}
            <button onClick={handleOrderButtonClick}>Order</button>
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









