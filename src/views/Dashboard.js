import React, { Component } from "react";
import TopNav from "../components/topNavigation/TopNav";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <TopNav/>
          {this.props.children}
      </div>
    );
  }
}