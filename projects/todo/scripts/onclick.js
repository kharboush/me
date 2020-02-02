/* eslint-disable */
import { removeFromServer, toggleFromServer, addNewTodoText, dispMsg } from "./utils.js"

const addTodo = () => {
  const $newTodoText = $('#addtodo-input-text').val();
  let $newTodoDate;

  if ($(`#addtodo-input-date`).val()) {
    $newTodoDate = $('#addtodo-input-date').val()
  } else {
    $newTodoDate = new Date();
  }

  const newTodo = { name: $newTodoText, due: $newTodoDate, isDone: false}

  addNewTodoText($newTodoText, newTodo)
}

const toggleTodo = () => {
  let id = $(event.target).attr('data-check-id');
  if($(event.target).is(":checked")){
    toggleFromServer(id, true)
    const randomNumber = Math.floor(Math.random() * 6);
    if(randomNumber === 0) {
      dispMsg('Ch-ch-ch-check');
    } else if (randomNumber === 1) {
      dispMsg('Niiice')
    } else if (randomNumber === 2) {
      dispMsg('Awesomesauce')
    } else if (randomNumber === 3) {
      dispMsg('Cool Beans')
    } else if (randomNumber === 4) {
      dispMsg('High Five')
    } else {
      dispMsg('Touchdown')
    }
  } else if($(event.target).is(":not(:checked)")){
    toggleFromServer(id, false)
  }
}

const deleteTodo = () => {
  let id = +$(event.target).attr('data-id');
  removeFromServer(id)
}

export { addTodo, toggleTodo, deleteTodo }