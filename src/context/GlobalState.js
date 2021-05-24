import React, { createContext, useReducer,useEffect } from "react";
import {AppReducer,initializer} from "./AppReducer";
import {useLocalStorage} from "../util";

const initialState = {
  websites: [
    { id: 1, linkName: "quora", linkUrl: "www.quora.com", vote: -2 },
    { id: 2, linkName: "sds", linkUrl: "www.sds.com", vote: -3 },
    { id: 3, linkName: "youtube", linkUrl: "www.youtube.com", vote: 10 },
    { id: 4, linkName: "twitter", linkUrl: "www.twitter.com", vote: 150 },
    // { id: 5, linkName: "quora", linkUrl: "www.quora.com", vote: -2 },
    // { id: 6, linkName: "sds", linkUrl: "www.sds.com", vote: -3 },
    // { id: 7, linkName: "youtube", linkUrl: "www.youtube.com", vote: 10 },
    // { id: 8, linkName: "twitter", linkUrl: "www.twitter.com", vote: 150 },
    // { id: 9, linkName: "quora", linkUrl: "www.quora.com", vote: -2 },
    // { id: 10, linkName: "sds", linkUrl: "www.sds.com", vote: -3 },
    // { id: 11, linkName: "youtube", linkUrl: "www.youtube.com", vote: 10 },
    // { id: 12, linkName: "twitter", linkUrl: "www.twitter.com", vote: 150 },
  ],
};
export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer,initialState, initializer);
  useEffect(() => {
    localStorage.setItem("MY_WEBSITES", JSON.stringify(state));
  }, [state]);

  console.log(state)
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
  function increaseVote(id) {
    dispatch({
      type: "INCREASE_VOTE",
      payload: id,
    });
  }
  function decreaseVote(id) {
    dispatch({
      type: "DECREASE_VOTE",
      payload: id,
    });
  }
  function sortToHighest(id) {
    dispatch({
      type: "SORT_TO_HIGHEST",
      payload: id,
    });
  }
  function sortToLowest(id) {
    dispatch({
      type: "SORT_TO_LOWEST",
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        websites: state.websites,
        deleteWebsite,
        addWebsite,
        increaseVote,
        decreaseVote,
        sortToHighest,
        sortToLowest
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
