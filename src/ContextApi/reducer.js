export const initialState = {
  user: null,
  myMessages: [],
  allUser: [],
  currentPeer: null,
  currentMessage: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_MESSAGES":
      return { ...state, myMessages: action.array };

    case "SET_USERS":
      return { ...state, users: action.users };

    case "SET_PEER":
      return { ...state, currentPeer: action.peer };
    default:
      return state;
  }
};

export default reducer;
