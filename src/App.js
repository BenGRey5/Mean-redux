
import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers/store';
import ItemList from './components/itemList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>The Mean Bean</h1>
        <ItemList />
      </div>
    </Provider>
  );
};

export default App;












// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './reducers/store';
// import ItemList from './components/itemList';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <h1>The Mean Bean</h1>
//         <ItemList />
//       </div>
//     </Provider>
//   );
// };

// export default App;









