import React, { useState } from 'react'

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('gubi cambios en todos_v1');
        setStorageChange(true);
      }
    })

    const toggleShow = () => {
      props.sincronized();
      setStorageChange(false);
    }

    return <WrappedComponent
      show={storageChange}
      toggleShow={toggleShow}
    />
  }
}

export {withStorageListener};
