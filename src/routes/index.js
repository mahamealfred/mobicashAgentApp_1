import React, { Component } from 'react'
import {  Route, Switch } from "react-router-dom";
import SignIn from '../pages/login/SignIn';
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
          <Route exact path="/" component={SignIn}/>
          {/* <Route exact path="/signin" component={SignIn}/> */}
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