import React, {Component} from "react";
import { Switch,Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          {/*Pathing for sites pages*/}
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route exact path="/" component={Home}/>
          
        </Switch>
        <Footer/>

      </React.Fragment>
    );
  }
}

export default App;
