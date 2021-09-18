import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from './Components/TodoHeader';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodoError } from './Components/TodoError';
import { TodosLoading } from './Components/TodosLoading';
import { EmptyTodos } from './Components/EmptyTodos';
import { TodoForm } from './Components/TodoForm';
import { CreateTodoButtom } from './Components/CreateTodoButtom';
import { Modal } from './Modal/index';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos()

  return (
    <>
      <TodoHeader >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList >
      {error && <TodoError error={error} />}
      {loading && <TodosLoading />}
      {(!loading && !searchedTodos.length) && <EmptyTodos />}

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

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <CreateTodoButtom
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  )
}

export default App;
