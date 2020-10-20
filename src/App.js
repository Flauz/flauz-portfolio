import React from 'react';
import {Route, Switch} from "react-router-dom"
import Home from './components/index'
import Resume from './components/Resume'
import Contacts from './components/Contacts'
import Portfolio from "./components/Portfolio"
import CssBaseline from '@material-ui/core/CssBaseline';
import {AnimatePresence} from 'framer-motion'
import './App.css';


function App() {
  return (
    <>
      <CssBaseline />
      <AnimatePresence>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts}/>
      </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
