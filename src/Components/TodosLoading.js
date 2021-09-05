import React from 'react';
import '../styles/components/TodosLoading.scss';


const TodosLoading = () => {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon'></span>
      <p className='LoadingTodo-text'>
        Estamos cargando, no desesperes
      </p>
      <span className='LoadingTodo-deleteIcon'></span>
    </div>
  )
}

export {TodosLoading};
