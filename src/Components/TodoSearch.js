import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext/index'
import '../styles/components/TodoSearch.scss';

const TodoSearch = () => {

  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className='TodoSearch'
        placeholder='Busca un TODO'
        value={searchValue}
        onChange={ onSearchValueChange }
      />
      {/* <p>{searchValue}</p> */}
    </>
  )
}

export { TodoSearch };
