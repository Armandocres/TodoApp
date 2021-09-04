import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';

const AppUi = ({loading, error, totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) => {
  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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
