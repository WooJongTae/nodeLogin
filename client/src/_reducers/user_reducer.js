import { LOGIN_USER } from "../_actions/types";

function loginUser(state = {}, action) {
  console.log(action.payload);
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        asfas: "asfa",
        loginSuccess: action.payload,
      };

    default:
      return state;
  }
}

export default loginUser;
