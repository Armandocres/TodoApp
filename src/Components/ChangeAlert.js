import React from 'react'
import { withStorageListener } from '../helpers/withStorageListener';
import '../styles/components/ChangeAlert.scss';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Parece que hiciste cambios en TODOs en otra pestaña</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button className='TodoForm-button TodoForm-button-add' onClick={() => toggleShow(false)}>Si!</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
