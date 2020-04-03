import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

const theme = createMuiTheme({
  palette: {
    secondary: {
        main: '#E33E7F'
      }
    }
  },
)

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
