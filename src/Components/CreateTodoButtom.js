import React from 'react';
import '../styles/components/CreateTodoButtom.scss';

const CreateTodoButtom = ({ setOpenModal, openModal }) => {

  const onClickButton = () => {
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };

  return (
    <button
      className='CreateTodoButtom'
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButtom };
