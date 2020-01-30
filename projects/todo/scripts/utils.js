/* eslint-disable */
const server = `http://localhost:3000/todos/`;

const checkEmptyState = async () => {
  let promise = await fetch(server)
  let json = await promise.json()
  if (json.length == 0) {
    $('#todo-list').append(`
      <div class="todo-element">
        <p class="empty-state">¡All Done!</p>
      </div>
    `)
  }
}

const dispMsg = (text) => {
  $('#heading').text("¡"+text+"!")
  setTimeout(() => {
    $('#heading').text("¡Todos!")
  }, 1000);
}

const addToServer = async (element) => {
  await fetch(`${server}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(element)
  })
  todosRefresh()
  $('#addtodo-input-text').val('');
  $('#addtodo-input-date').val('');
}

const removeFromServer = async (id) => {
  await fetch(`${server}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  todosRefresh()
  dispMsg('Todo Deleted');
}

const toggleFromServer = async (id, value) => {
  let promise = await fetch(`${server}${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      isDone: value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (promise.status != 200) {
    throw new Error (`Oopsies! Status code ${response.status}.`)
  }
}

const appendTodoHtml = (todo, container) => {
  $(container).prepend(`
  <div id="todo-element-${todo.id}" class="todo-element">
  <label class="btn" for="check-${todo.id}">
  <input class="todocheck" data-check-id="${todo.id}" id="check-${todo.id}" type="checkbox" ${todo.isDone ? 'checked' : ''}>
  <p class="todotext">${todo.name}</p><div class="date">${moment(todo.due).format('ddd, MMM Do')}</div>
  <button class="delbutton" type="button" data-id="${todo.id}">Remove</button>
  </label>
  </div>
  <hr>
  `);
};

const todosRefresh = async () => {
  const $container = $('#todo-list');
  $container.empty();
  
  let promise = await fetch(server)
  let json = await promise.json()
  json.forEach(todo => {appendTodoHtml(todo, $container)})

  if (promise.status != 200) {
    throw new Error (`Oopsies! Status code ${response.status}.`)
  }

  checkEmptyState()
};

const addNewTodoText = (text, element) => {
  if (!(text) || !(text).replace(/\s/g, '').length) {
    dispMsg('Please add text')
  } else if (text.length > 40) {
    dispMsg('Todo is too long')
  } else {
    addToServer(element)
  }
}

export { removeFromServer, todosRefresh, addNewTodoText, dispMsg, toggleFromServer }