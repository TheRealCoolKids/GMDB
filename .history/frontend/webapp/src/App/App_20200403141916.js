import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import SnackBarSingleton from "./components/SnackBar/SnackBarSingleton";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0c4677',
      light: '#376E9B',
      dark: '#022745'
    }
  }
},
)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        {SnackBarSingleton.render()}
        <Header />
        <MainContent />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
