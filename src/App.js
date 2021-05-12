import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
function App() {

  return (
    <Container>
      <TodoInput />
      <TodoList /> 

    </Container>
  );
}

export default App;
