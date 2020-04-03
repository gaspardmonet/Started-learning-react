let todoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  TodoId: ++todoId,
  text
});
