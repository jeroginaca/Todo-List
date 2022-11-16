
import react, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

function handleSubmit(e){
  e.preventDefault()

  const newTodo = {
    id: new Date().getTime(),
    text: todo,
    completed: false,
  }

  setTodos([...todos].concat(newTodo))
  setTodo("")

  
}

function deleteTodo(id){
  const updatedTodos = [...todos].filter((todo) => todo.id !== id)
  setTodos(updatedTodos)
}

  return (
    <div className="App">
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
      <button>Add Todo</button>
      </form>
     
      {todos.map((todo) => <div className='todo' key={todo.id}>
      <div className='textoDeLaTarea'>{todo.text}</div>
      <button onClick={() => deleteTodo(todo.id)}><i class="fa-solid fa-circle-xmark"></i></button>
      </div>)}
     
    </div>
  );
}

export default App;
