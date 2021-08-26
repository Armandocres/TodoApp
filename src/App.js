import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButtom } from './Components/CreateTodoButtom';

import './App.css';

const todos = [
  {
    text: 'Cortar debolla',
    complete: false
  },
  {
    text: 'Cortar cebolla',
    complete: false
  },
  {
    text: 'Cortar a mi novia',
    complete: false
  },
]


function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
      {todos.map(todo => (
        <TodoItem text={ todo.text } key={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  );
}

export default App;
