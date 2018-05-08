import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
          </div>
          <Order />
          <Inventory />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
