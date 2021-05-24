import React, {useEffect} from "react";
import { NavBar } from "./components/Header";
import { GlobalStyle } from "./theme";
import { withRouter,useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddWebsite from "./components/AddWebsite";
import Home from "./components/Home";
import { Divider } from "antd";

const App = () => {
    const history = useHistory();
    useEffect(() => {
        history.push("/home");
    }, [ history]);
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Divider />
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/add" component={AddWebsite} exact />
      </Switch>
    </div>
  );
};

export default withRouter(App);
