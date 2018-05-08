import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Fish from "./components/Fish";
import Inventory from "./components/Inventory";
import Order from "./components/Order";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header />
            <Fish />
          </div>
          <Inventory />
          <Order />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
