import React from 'react';
import './App.css';
import ShoutOutList from './components/ShoutOutList';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShoutOutCard from './components/ShoutOutCard';
import ShoutOutTo from './components/ShoutOutTo';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <ShoutOutList/>
          </Route>
          {/* <Route path="/shoutoutto/:to"> */}
            <ShoutOutTo/>
          {/* </Route> */}
        </Switch>
      </div>
    </Router>
      
   
  );
}

export default App;



      {/* <nav>
          <li><Link to="/shoutoutlist"></Link></li>
        </nav> */}