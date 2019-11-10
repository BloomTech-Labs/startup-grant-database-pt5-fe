import React from 'react';
import './App.css';
import './components/search/search.css';

import TopBar from './components/scafolding/topbar/topbar.js';
import PlayArea from '../src/components/scafolding/playarea/playarea.js';

function App() {
  return (
    <div className="App">
      <TopBar />
      <PlayArea/>
    </div>
  );
}

export default App;
// 