import React from 'react'

import * as icons from './radix-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      {Object.entries(icons).map(([name, Icon]) => (
        <div className="App-iconContainer">
          {name}
          <svg viewBox={Icon.viewBox} width={32} height={32}>
            <use xlinkHref={`#${Icon.id}`} />
          </svg>
        </div>)
      )}
    </div>
  );
}

export default App;
