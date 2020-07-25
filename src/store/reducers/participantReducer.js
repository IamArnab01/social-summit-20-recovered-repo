const initState = {
  authError: null,
};

const participantReducer = (state = initState, action) => {
  switch (action.type) {
    case "PARTICIPANT_LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed! Please check Eamil and Passward",
      };

    case "PARTICIPANT_LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };

    case "PARTICIPANT_SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;

    case "PARTICIPANT_SIGNUP_SUCCESS":
      console.log("signup success");
      return { ...state, authError: null };

    case "PARTICIPANT_SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message,
      };

    default:
      return state;
  }
};

export default participantReducer;
