import React from 'react';
import Item from './coffeeShop.js'

function ItemList({ items, onSell, onDelete, onUpdate }) {
    return (
        <React.Fragment>
        <div>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onSell={() => onSell(item.id)}
                    onDelete={() => onDelete(item.id)}
                    onUpdate={(updatedItem) => onUpdate(item.id, updatedItem)}
                />
            ))}
        </div>
        </React.Fragment>
    );
}
ItemList.propTypes = {
    itemList: PropTypes.object,
    onItemSelection: PropTypes.func
}
export default ItemList;

// import React from 'react';
// import Item from './coffeeShop.js'

// function ItemList({ items, onSell, onDelete, onUpdate }) {
//     return (
//         <div>
//             {items.map(item => (
//                 <Item
//                     key={item.id}
//                     item={item}
//                     onSell={() => onSell(item.id)}
//                     onDelete={() => onDelete(item.id)}
//                     onUpdate={(updatedItem) => onUpdate(item.id, updatedItem)}
//                 />
//             ))}
//         </div>
//     );
// }

// export default ItemList;
