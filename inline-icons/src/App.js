import React from 'react'

import * as icons from './radix-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      {Object.entries(icons).map(([name, Icon]) => (
        <div className="App-iconContainer">
          {name}
          <Icon width={32} height={32} />
        </div>)
      )}
    </div>
  );
}

export default App;
