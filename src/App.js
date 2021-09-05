import React from 'react';
import { AppUi } from './Components/AppUi';
import { TodoProvider } from './TodoContext/index'

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
