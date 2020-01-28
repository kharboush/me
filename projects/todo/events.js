const addTodoClick = callback =>
  $(`.todo-window`).on('click', '#addtodo-btn', callback);
const deleteTodoClick = callback =>
  $(`.todo-window`).on('click', '[data-id]', callback);
const toggleTodoClick = callback =>
  $(`.todo-window`).on('click', '[data-check-id]', callback);

export { addTodoClick, deleteTodoClick, toggleTodoClick };
