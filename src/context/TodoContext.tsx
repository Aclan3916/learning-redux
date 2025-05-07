import { createContext, useState, type ReactNode} from 'react'

//define the type for a todo item 
type Todo ={
    id: number;
    text: string;
    completed: boolean;
}

//defin what the context will provide
//This is what the context will make available to other components
type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
}

//create the context object(with undefined initially)
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

//create the provider component
type TodoProviderProps = {
    children: ReactNode;
};

//this is your actual state
//Provider is the only place where todos live
//Other component will read from or update this via context
export const TodoProvider = ({children} : TodoProviderProps) => {
    const[todos, setTodos] = useState<Todo[]>([]);
  
    const addTodo = (text : string) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };

        setTodos((prev) => [...prev, newTodo])
    };

    const toggleTodo = (id: number) => {
        setTodos((prev) => prev.map((todo) =>todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    return (
        //this wraps your app and shares the functions 
        //so anything inside children can use useContext(TodoContext) to access those values
    <TodoContext.Provider value={{todos, addTodo, toggleTodo}}> 
    {children}
    </TodoContext.Provider>
      
  )
}

export default TodoContext

//Overall 
//createContext() makes the context
//TodoProvider holds the todo state
//You can now wrap components in TodoProvider to give them access to 
//                                      todos, addTodo, and toggleTodo

