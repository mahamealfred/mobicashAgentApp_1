import React,{Component} from "react";
import Routes from './routes/index';
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";


export default class App extends Component {


  render() {
    return (
      <Router>
        <Routes/>
      </Router>
    )
  }
}