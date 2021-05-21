import {NavBar} from "./components/Header";
import {GlobalStyle} from "./theme";
import "./App.css";
import {GlobalProvider} from "./context/GlobalState";
import Website from "./components/Website";
import WebsiteList from "./components/WebsiteList";

const App = () => {
    return (
        <GlobalProvider>
                <GlobalStyle/>
                <NavBar/>
                <Website/>
                <WebsiteList/>
        </GlobalProvider>

    );
}

export default App;
