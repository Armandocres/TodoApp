import ReactDOM from 'react-dom';
import '../styles/Modal/Modal.scss';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='ModalBackground'>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
