import React from 'react';
import '../styles/components/TodoList.scss';

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>
        { children }
      </ul>
    </section>
  )
}

export { TodoList };
