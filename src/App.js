import './App.css';
import React, { useState } from 'react';


function App() {
  const [ items ] = useState([
    { id: 1, name: "eggs" },
    { id: 2, name: "bread" },
    { id: 3, name: "butter"}
  ]);

  return (
    <div className="App">
      {/* { items && items.map(item => {
        return <div key={item.id}>{item.name}</div>
      } )} */}

      {/* this one is better for me */}
      {items && items.filter((item) => item.id === 3).map((item) => item.name)}
    </div>
  );
}

export default App;
