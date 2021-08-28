import React from 'react';
import '../styles/components/TodoItem.scss';

const TodoItem = ({ text, onComplete, onDeleteTodo, completed }) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDeleteTodo}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
