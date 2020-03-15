// import { actionType } from "./constant";

export function changeState(updatedUserName) {
  return dispatch => {
    dispatch({ type: "umer", payload: updatedUserName });
  };
}
