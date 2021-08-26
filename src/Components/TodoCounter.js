import React from 'react';
import '../styles/components/TodoCounter.scss';

const TodoCounter = () => {
  return (
    <>
      <h1 className='TodoCounterTitle'>TODO App</h1>
      <h2 className='TodoCounter'>Has completado 2 de 3 TODOs</h2>
    </>
  )
}

export { TodoCounter };
