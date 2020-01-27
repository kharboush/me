/* eslint-disable */
$(document).ready(() => {
  console.log('Ready');

  const todosArray = [];

  
  const addToArray = (array, element) => {
    array.splice(-1, 0, element)
  }
  
  const removeFromArray = (array, id) => {
    array.splice((id - 1), 1)
  }
  
  const addTodoFn = (todo, container) => {
    $(container).append(`
    <div class="todo-wrapper">
    <div class="todo-element">
    <label class="btn" for="check-${todo.id}">
    <input class="todocheck" id="check-${todo.id}" type="checkbox"><p class="todotext">${todo.name}</p>
    <div class="date">${moment(todo.due).format('ddd, MMM Do')}</div>
    <button class="delbutton" data-id="${todo.id}">Remove</button>
    </label>
    </div>
    <hr>
    </div>
    `);
  };

  const todosRefresh = (array, container) => {
    const $container = $(container);
    $container.empty();
    array.forEach(todo => {
      addTodoFn(todo, $container)
    });
  };
  
  $(`#addtodo-btn`).click(() => {
    const $newTodoText = $('#addtodo-input-text').val();
    const $newTodoDate = $(`#addtodo-input-date`).val();
    const newTodo = {id: (todosArray.length + 1), name: $newTodoText, due: $newTodoDate, isDone: false}
    if($newTodoText && $newTodoDate) {
      addToArray(todosArray, newTodo)
      todosRefresh(todosArray, '#todo-list')
  
      
      // if ($newTodoText.length > 0) {
      //   addTodoFn($newTodoText)
      // }
      $('#addtodo-input-text').val(''); // Clear text field
      $('#addtodo-input-date').val('');
    } else {
      alert('Please add text and date.')
    }

  });

  $('.todo-window').on('click', '[data-id]', (ev) => {
    const todoid = '[data-id]'
    removeFromArray(todosArray, todoid)
    todosRefresh(todosArray, '#todo-list')
    // const target = $(ev.target)
    // $(target).parent().remove();
    alert('Todo Deleted!');
  });

  
});
