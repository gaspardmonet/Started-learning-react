// import { actionType } from "../actions/constant";

const INITIAL_STATE = {
  username: "Umer"
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "umer":
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
};
