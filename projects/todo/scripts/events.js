const addTodoOnClick = callback =>
  $(`.todo-window`).on('click', '#addtodo-btn', callback);
const deleteTodoOnClick = callback =>
  $(`.todo-window`).on('click', '[data-id]', callback);
const toggleTodoOnClick = callback =>
  $(`.todo-window`).on('click', '[data-check-id]', callback);

export { addTodoOnClick, deleteTodoOnClick, toggleTodoOnClick };
