import React from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <MovieList/>
    </div>
  );
}

export default App;
