import { NavBar } from "./components/Header";
import { GlobalStyle } from "./theme";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddWebsite from "./components/AddWebsite";
import Home from "./components/Home";
import { Divider } from "antd";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Divider />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddWebsite} exact />
      </Switch>
    </div>
  );
};

export default withRouter(App);
