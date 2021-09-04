import React from 'react';
import { onSearchButtom } from '../helpers/onButtons';
import '../styles/components/TodoSearch.scss';

const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        className='TodoSearch'
        placeholder='Cebolla'
        value={searchValue}
        onChange={(event) => onSearchButtom(event, setSearchValue)}
      />
      {/* <p>{searchValue}</p> */}
    </>
  )
}

export { TodoSearch };
