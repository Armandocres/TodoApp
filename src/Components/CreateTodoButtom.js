import React from 'react';
import '../styles/components/CreateTodoButtom.scss';

const CreateTodoButtom = () => {

  const onClickButtom = (text) => {
    console.log(text);
  }

  return (
    <button
      className='CreateTodoButtom'
      onClick={() => onClickButtom('Hola soy un boton desde una funcion') }
    >
      +
    </button>
  );
}

export { CreateTodoButtom };
