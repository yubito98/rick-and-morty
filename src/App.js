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
          <Route path="/rick-and-morty" element={<AllCharacters/>} />
          <Route path='https://yubito98.github.io/rick-and-morty/:id' element={<OneCharacter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
