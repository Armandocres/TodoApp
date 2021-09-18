import React from 'react';
import '../styles/components/TodoCounter.scss';

const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <>
      <h1 className='TodoCounterTitle'>TODO App</h1>
      <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </>
  )
}

export { TodoCounter };
