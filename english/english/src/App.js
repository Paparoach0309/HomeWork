import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Library from './Components/Page';
import Training from './Components/Training';
import Learn from './Components/Learn';

const App = () => {
  let score = '0'
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Nav/>
          <Score score ={score}/>
            <Route path='/Library' component={Library}/>
            <Route path='/Training' component={Training}/>
            <Route path='/Learn' component={Learn}/>
      </div> 
    </BrowserRouter>
  )
}

export default App;
