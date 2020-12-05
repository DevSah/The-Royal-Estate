import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/details/:id?' exact component={ProductDetails} />          
            <Route path='/about' component={About} />
            {/* <Route path='/shop' component={Shop} /> */}
          </Switch>
        </Router>
        

    </div>
  );
}

export default App;
