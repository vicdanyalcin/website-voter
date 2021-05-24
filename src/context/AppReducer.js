export const initializer = (initialValue = []) =>
  JSON.parse(localStorage.getItem("MY_WEBSITES")) || initialValue;

export const AppReducer = (state, action) => {
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
        websites: state.websites.sort((a, b) => b.vote - a.vote),
      };
    case "SORT_TO_LOWEST":
      return {
        ...state,
        websites: state.websites.sort((a, b) => a.vote - b.vote),
      };
    default:
      return state;
  }
};
