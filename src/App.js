import {NavBar} from "./components/Header";
import {GlobalStyle} from "./theme";
import "./App.css";
import Website from "./components/Website";
import WebsiteList from "./components/WebsiteList";
import {AddWebsite} from "./components/AddWebsite";
import SubmitButton from "./components/SubmitButton";

const App = () => {
    return (
        <div>
            <GlobalStyle/>
            <NavBar/>
            <SubmitButton/>
            <AddWebsite/>

            <Website/>
            <WebsiteList/>
        </div>

    );
}

export default App;
