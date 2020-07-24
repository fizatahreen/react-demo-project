import React, { Component } from "react";
import App from './App';
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO,
          Resize the screen size to see the magic!
        </h2>
        

       <App></App>
      </div>
    );
  }
}

export default Home;