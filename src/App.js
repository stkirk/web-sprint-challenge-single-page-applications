import React from "react";
//imports from react-router-dom
import { Route, Link, NavLink, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {/* maybe change Help link later PLACEHOLDER */}
          <Link to="/">Help</Link>
        </div>
      </nav>
    </div>
  );
};
export default App;
