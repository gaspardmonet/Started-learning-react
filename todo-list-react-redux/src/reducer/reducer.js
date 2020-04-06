export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      // console.log(`from reducer  `, action.text);
      console.log(state);
      return {
        ...state,
        text: action.text,
        id: action.TodoId
      };

    case "DELETE_TODO":
      // console.log(state);
      state.id = action.id
      console.log(`state id to be deleted is `, state.id)
      delete state.id
      console.log(`from reducer id after delete `, state.id);
      return state;

    case "EDIT_TODO":
      console.log(`from reducer  `, action.id);
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
};
