import React from 'react';
import OptionList from './components/userOptions.js';
import Form1 from './components/Form1.js';

function App() {
  return (
    <div className="App">
      <h1>The Mean Bean</h1>
      <OptionList onAddItem={(newItem) => console.log(newItem)} />
      <Form1 />
    </div>
  );
}

export default App;