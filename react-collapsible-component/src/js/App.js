import React from "react";
import image from "../images/expand-vertical-4.svg";
import Collapsible from "./Collapsible";
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={image} />
          <h1>Fetch data</h1>
        </header>
        <div className="content">
          <div className="panel-group">
            <Collapsible title="Overview">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute.
              </p>
            </Collapsible>
            <Collapsible title="Features">
              <p>features</p>
            </Collapsible>
            <Collapsible title="Software">
              <p>software</p>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
