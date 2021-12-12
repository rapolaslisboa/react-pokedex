import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { RouteNames } from "./utils/RouteNames";

const App = () => {
  const routes = (
    <Switch>
      <Route path={RouteNames.Home()} exact component={Home} />
      <Redirect to={RouteNames.Home()} />
    </Switch>
  );

  return <Fragment>{routes}</Fragment>;
};

export default App;
