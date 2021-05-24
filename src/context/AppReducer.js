
// const initialState = {
//   websites: [
//     { id: 1, linkName: "quora", linkUrl: "www.quora.com", vote: -2 },
//     { id: 2, linkName: "sds", linkUrl: "www.sds.com", vote: -3 },
//     { id: 3, linkName: "youtube", linkUrl: "www.youtube.com", vote: 10 },
//     { id: 4, linkName: "twitter", linkUrl: "www.twitter.com", vote: 150 },
//     // { id: 5, linkName: "quora", linkUrl: "www.quora.com", vote: -2 },
//     // { id: 6, linkName: "sds", linkUrl: "www.sds.com", vote: -3 },
//     // { id: 7, linkName: "youtube", linkUrl: "www.youtube.com", vote: 10 },
//     // { id: 8, linkName: "twitter", linkUrl: "www.twitter.com", vote: 150 },
//     // { id: 9, linkName: "quora", linkUrl: "www.quora.com", vote: -2 },
//     // { id: 10, linkName: "sds", linkUrl: "www.sds.com", vote: -3 },
//     // { id: 11, linkName: "youtube", linkUrl: "www.youtube.com", vote: 10 },
//     // { id: 12, linkName: "twitter", linkUrl: "www.twitter.com", vote: 150 },
//   ],
// };
export const initializer = (initialValue = []) =>
    JSON.parse(localStorage.getItem("MY_WEBSITES")) || initialValue;



export const AppReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "DELETE_WEBSITE":
      return {
        ...state,
        websites: state.websites.filter(
          (website) => website.id !== action.payload
        ),
      };
    case "ADD_WEBSITE":
      return {
        ...state,
        websites: [action.payload, ...state.websites],
      };
    case "INCREASE_VOTE":
      return {
        ...state,
        websites: state.websites.map((website) => {
          if (website.id === action.payload) {
            return {
              ...website,
              vote: website.vote + 1,
            };
          }
          return website;
        }),
      };
    //sreturn { vote:state.websites.vote + 1};
    case "DECREASE_VOTE":
      return {
        ...state,
        websites: state.websites.map((website) => {
          if (website.id === action.payload) {
            return {
              ...website,
              vote: website.vote - 1,
            };
          }
          return website;
        }),
      };
    case "SORT_TO_HIGHEST":
      return {
        ...state,
        websites: state.websites.sort(
            (a,b) => b.vote-a.vote
        ),
      };
    case "SORT_TO_LOWEST":
      return {
        ...state,
        websites: state.websites.sort(
            (a,b) => a.vote-b.vote
        ),
      };
    default:
      return state;
  }
};

