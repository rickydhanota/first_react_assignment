import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header 
        firstName = {"Ricky"}
        lastName = {"Dhanota"}
        age = {27}
        hairColor = {"Black"}
      />

      <Header 
        firstName = {"Sukhpreet"}
        lastName = {"Dhanota"}
        age = {27}
        hairColor = {"Blonde"}
      />
    </div>
  );
}

export default App;
