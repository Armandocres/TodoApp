import React, { useContext } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoContext } from '../TodoContext/index';
import { CreateTodoButtom } from './CreateTodoButtom';

const AppUi = () => {

  const {error, loading, searchedTodos, completeTodo, deleteTodo} = useContext(TodoContext)


  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
      {error && <p>Hubo un error</p>}
      {loading && <p>Estamos cargando...</p>}
      {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

      {searchedTodos.map(todo => (
      <TodoItem
        text={todo.text}
        key={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDeleteTodo={() => deleteTodo(todo.text) }
      />
      ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  )
}

export { AppUi };
