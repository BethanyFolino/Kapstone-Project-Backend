import React from "react";
import { Route, Switch } from "react-router-dom";
import { useStore } from "./Store/Store";
import "./App.css";
import Base from "./Views/Base";
import Home from "./Views/Home";

function App() {
  const user = useStore((state) => state.user);
  return (
    <div className="App">
      {/* <h1>{user.token}</h1> */}
      <Switch>
        <Route exact path="/" component={Base} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
