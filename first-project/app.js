const { createStore } = require("redux");
// const { createStore } = Redux;
const initState = {
  todos: [],
  posts: []
};
function myReducer(state = initState, action) {
  console.log(state, action);
  if (action.type === "todo") {
    return {
      todos: [...state.todos, action.todos]
    };
  }
}

const todoAction = {
  type: "todo",
  todos: "abc"
};

const store = createStore(myReducer);
store.dispatch(todoAction);
store.subscribe(() => {
  console.log(`state updated`, store.getState());
});
