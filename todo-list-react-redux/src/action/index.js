let todoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  TodoId: todoId++,
  text
});

export const deleteTodo = (id, text) => ({
  type: "DELETE_TODO",
  id,
})

// export const editTodo = (text) => ({
//   type: "EDIT_TODO",
//   text
// })