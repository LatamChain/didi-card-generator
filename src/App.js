import React from 'react';
//import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import InitPage from './pages/InitPage';
import FirmPage from './pages/FirmPage';
import FormPage from './pages/FormPage';
import CheckPage from './pages/CheckPage';
import VerificatePage from './pages/VerificatePage';

import PrimarySearchAppBar from './components/PrimaryAppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Copyright from './components/Copyright'

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#E33E7F'
    },
    primary: {
      main: '#4360d8'
    }
  }
});


function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <PrimarySearchAppBar />
          <Switch>
            <Route path='/' exact component={InitPage}/>
            <Route path='/firm' component={FirmPage}/>
            <Route path='/form' component={FormPage}/>
            <Route path='/check/:digest' component={CheckPage}/>
            <Route path='/check' component={CheckPage}/>
            <Route path='/verify' component={VerificatePage}/>
          </Switch>
          <Copyright />
        </MuiThemeProvider>
      </Router>
  );
}

export default App;
