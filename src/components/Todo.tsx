import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../app/store'
import { addTodo, removeTodo } from '../features/todo/todoSlice';

type Todo = {
    id: number,
    text: string
}

const Todo = () => {

    const[ todo, setTodo ] = useState('');

    const todos = useSelector((state : RootState) => state.todo.todos);
    const dispatch = useDispatch<AppDispatch>();

    const handleAdd = () =>
    {
        if(!todo.trim()) return;

        dispatch(addTodo(todo));
        setTodo('');
    }


  return (
    <>
     <h2>Todo List</h2>
      <input placeholder="Add Todo" type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
      <button onClick={handleAdd}>Add </button>

    <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.text}
    <button onClick={() => dispatch(removeTodo(todo.id))}> Delete</button>
    </li>)}
    </ul>

    </>
  )
}

export default Todo
