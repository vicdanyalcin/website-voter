import { NavBar } from "./components/Header";
import { GlobalStyle } from "./theme";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Website from "./components/Website";
import WebsiteList from "./components/WebsiteList";
import { Route, Switch } from "react-router-dom";

import { AddWebsite } from "./components/AddWebsite";
import SubmitButton from "./components/SubmitButton";
import Home from "./components/Home";
import { Divider } from "antd";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Divider />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddWebsite} exact />
      </Switch>
      {/*<NavBar />*/}
      {/*<SubmitButton />*/}
      {/*<AddWebsite />*/}
      {/*<Website />*/}
      {/*<WebsiteList />*/}
    </div>
  );
};

export default App;
