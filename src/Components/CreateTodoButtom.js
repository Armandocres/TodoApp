import React from 'react';
import { onClickButtom } from '../helpers/onButtons';
import '../styles/components/CreateTodoButtom.scss';

const CreateTodoButtom = () => {
  return (
    <button
      className='CreateTodoButtom'
      onClick={() => onClickButtom('Hola soy un boton desde la consola') }
    >
      +
    </button>
  );
}

export { CreateTodoButtom };
