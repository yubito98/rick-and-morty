import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import OneCharacter from './components/OneCharacter';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCharacters/>} />
          <Route path='/character/:id' element={<OneCharacter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
