import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButtom } from './Components/CreateTodoButtom';
import './styles/general.scss';

const todos = [
  {
    text: 'Cortar debolla',
    completed: false
  },
  {
    text: 'Cortar cebolla',
    completed: true
  },
  {
    text: 'Cortar a mi novia',
    completed: false
  },
]


function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
      {todos.map(todo => (
        <TodoItem
          text={todo.text}
          key={todo.text}
          completed={todo.completed}
        />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  );
}

export default App;
