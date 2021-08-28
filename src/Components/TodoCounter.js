import React from 'react';
import '../styles/components/TodoCounter.scss';

const TodoCounter = ({ total, completed }) => {
  return (
    <>
      <h1 className='TodoCounterTitle'>TODO App</h1>
      <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>
    </>
  )
}

export { TodoCounter };
