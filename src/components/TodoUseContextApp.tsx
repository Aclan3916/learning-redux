import {useContext, useState} from 'react'
import {TodoContext} from '../context/TodoContext'


const TodoUseContextApp = () => {

    const todoContext = useContext(TodoContext);

    if(!todoContext) {
        return <div> Error: TodoContext not found. </div>
    }

    const {todos, addTodo, toggleTodo } = todoContext;
    const[text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!text.trim()) return;

        addTodo(text);
        setText('');
    }

  return (
    <div>
      <h2> Todos using useContext</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => <li key={todo.id} style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
        }} onClick={() => toggleTodo(todo.id)}>{todo.text}</li>)}
      </ul>

    </div>
  )
}

export default TodoUseContextApp
