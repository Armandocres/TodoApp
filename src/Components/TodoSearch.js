import React from 'react';
import '../styles/components/TodoSearch.scss';

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className='TodoSearch'
        placeholder='Busca un TODO'
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </>
  )
}

export { TodoSearch };
