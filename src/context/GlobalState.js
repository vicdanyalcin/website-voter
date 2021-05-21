import React, { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";



const initialState = {
    websites: [
        { id: 1, text: "www.quora.com", vote: -2 },
        { id: 2, text: "www.sds.com", vote: -3 },
        { id: 3, text: "www.youtube.com", vote: 10 },
        { id: 4, text: "www.twitter.com", vote: 150 },
    ],
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function deleteWebsite(id) {
        dispatch({
            type: "DELETE_WEBSITE",
            payload: id,
        });
    }
    function addWebsite(website) {
        dispatch({
            type: "ADD_WEBSITE",
            payload: website,
        });
    }
    return (
        <GlobalContext.Provider
            value={{
                websites: state.websites,
                deleteWebsite,
                addWebsite,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
