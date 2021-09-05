import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext';
import '../styles/components/TodoForm.scss';

const TodoForm = () => {

  const [newTodoValue, setNewTodoValue] = useState('')

  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext)

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }


  return (
    <form onSubmit={onAdd}>
      <label>
        ...
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder='Escribe una nueva tarea'
        />
      </label>
      <div className="TodoForm-buttonContainer">
        <button
          type='button'
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button
          type='submit'
          className="TodoForm-button TodoForm-button-add"
        >
          Añadir TODO
        </button>
      </div>
    </form>
  )
}

export {TodoForm}
