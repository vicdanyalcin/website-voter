const AppReducer = (state, action) => {
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
        // case "INCREASE_VOTE":
        //     return {
        //         ...state,
        //         websites: [action.payload, ...state.websites],
        //     };
        // case "DECREASE_VOTE":
        //     return {
        //         ...state,
        //         websites: [action.payload, ...state.websites],
        //     };
        default:
            return state;
    }
};

export default AppReducer