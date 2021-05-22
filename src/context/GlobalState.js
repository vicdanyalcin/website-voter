import React, { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";



const initialState = {
    websites: [
        { id: 1,linkName:"quora", linkUrl: "www.quora.com", vote: -2 },
        { id: 2,linkName:"sds", linkUrl: "www.sds.com", vote: -3 },
        { id: 3,linkName:"youtube", linkUrl: "www.youtube.com", vote: 10 },
        { id: 4,linkName:"twitter", linkUrl: "www.twitter.com", vote: 150 },
    ],
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    console.log(children)
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
    // function increaseVote(vote) {
    //     dispatch({
    //         type: "INCREASE_VOTE",
    //         payload: vote,
    //     });
    // }
    // function decreaseVote(website) {
    //     dispatch({
    //         type: "DECREASE_VOTE",
    //         payload: website,
    //     });
    // }
    return (
        <GlobalContext.Provider
            value={{
                websites: state.websites,
                deleteWebsite,
                addWebsite,
                // increaseVote,
                // decreaseVote,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
