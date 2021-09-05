import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext/index';
import '../styles/components/TodoCounter.scss';

const TodoCounter = () => {
  const { totalTodos, completedTodos, } = useContext(TodoContext);
  return (
    <>
      <h1 className='TodoCounterTitle'>TODO App</h1>
      <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </>
  )
}

export { TodoCounter };
