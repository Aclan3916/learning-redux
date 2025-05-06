import {createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Todo = {
    id: number,
    text: string
}

type TodoState = {
    todos: Todo[];
}

const initialState : TodoState = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:
    {
        addTodo: (state, actions: PayloadAction<string>) => 
        {
            const newTodo: Todo = {
                id: Date.now(),
                text: actions.payload
            };
            state.todos.push(newTodo);
        },

        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
          }
        }
    });

    //export actions and reducers to use in other pages
    export const {addTodo, removeTodo} = todoSlice.actions;
    export default todoSlice.reducer;