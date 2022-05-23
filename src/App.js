import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import OneCharacter from './components/OneCharacter';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<AllCharacters/>} />
          <Route path='/character/:id' element={<OneCharacter/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
