import React from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
