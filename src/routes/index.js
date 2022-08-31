import React, { Component } from 'react'
import {  Route,BrowserRouter, Switch } from "react-router-dom";

import Login from '../pages/login/Login';

import DashboardRoute from "./Dashboard.routes";





export default class index extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isAuth:localStorage.getItem("mobicasAuth")
//     };
//   }
    render() {
        return (
        
          <Switch>
          <Route exact path="/" component={Login}/>
             <Route path="/dashboard">
             <DashboardRoute />
              </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          
          </Switch>
          
       
          
        )
    }
}