import React from 'react';
import '../styles/components/TodoList.scss';

const TodoList = ({
  children,
  error,
  onError,
  loading,
  onLoading,
  searchedTodos,
  onEmtyTodos,
  render,
  onEmtySearchResults,
  totalTodos,
  searchValue }) => {
  const renderFunc = children || render;
  return (
    <section>
      { error && onError() }
      {loading && onLoading()}
      {(!loading && !totalTodos) && onEmtyTodos()}
      {(!!totalTodos && !searchedTodos?.length) && onEmtySearchResults(searchValue)}
      {(!loading && !error) && searchedTodos.map(renderFunc) }
      <ul>
        { children }
      </ul>
    </section>
  )
}

export { TodoList };
