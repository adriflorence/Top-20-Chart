import React from 'react';
import './App.css';
import ChartContainer from './containers/ChartContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>The Official UK Top 20 Chart</h1>
        <ChartContainer/>
      </header>
    </div>
  );
}

export default App;
