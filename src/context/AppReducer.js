// immutablejs immtuablity
// redux, mobx
const AppReducer = (state, action) => {
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
    default:
      return state;
  }
};

export default AppReducer;
