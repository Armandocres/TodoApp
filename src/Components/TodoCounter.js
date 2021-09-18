import React from 'react';
import '../styles/components/TodoCounter.scss';

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <>
      <h1 className='TodoCounterTitle'>TODO App</h1>
      <h2
        className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </>
  )
}

export { TodoCounter };
