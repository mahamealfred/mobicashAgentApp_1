import React, { Component } from "react";
import Footer from "../components/footer/Footer";
import TopNav from "../components/topNavigation/TopNav";



export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <TopNav/>
       
          {this.props.children}
      
        <Footer/>
      </div>
    );
  }
}