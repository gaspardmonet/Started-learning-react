export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(`from reducer  `, action.text);
      return {
        ...state,
        text: action.text,
        id: action.TodoId
      };
    default:
      return state;
  }
};
