import React from 'react';
import '../styles/components/TodoSearch.scss';

const TodoSearch = ({ searchValue, setSearchValue }) => {

  const onSearchButtom = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <>
      <input
        className='TodoSearch'
        placeholder='Cebolla'
        value={searchValue}
        onChange={onSearchButtom}
      />
      {/* <p>{searchValue}</p> */}
    </>
  )
}

export { TodoSearch };
