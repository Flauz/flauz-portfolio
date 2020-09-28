import React from 'react';
import {Route} from "react-router-dom"
import Home from './components/index'
import Resume from './components/Resume'
import Contacts from './components/Contacts'
import Portfolio from "./components/Portfolio"
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts}/>
    </>
  );
}

export default App;
