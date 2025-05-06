import { createSlice } from '@reduxjs/toolkit'
//purpose: helps us avoid boilerplate by generating actions and reducers together.

//defining type of counterstate
interface CounterState { 
    value: number;
}
//setting initial state
const initialState: CounterState = {
    value: 0,
}
//create slice creates
//1. a slice of state named "counter"
//2. Reducer functions to update that state
//3. action creatiors we can dispatch (like counterSlice.actions.increment)
const counterSlice = createSlice({
    name: 'counter', //name of slice
    initialState,   
    reducers: { //setting reducer functions that is the business logic of how to update sate/return new version of state
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    },

});


//exports the generated action creators so we can dispatch them in our components
export const {increment, decrement, reset } = counterSlice.actions;
//Export the reducer itself so we can add it to our Redux store
export default counterSlice.reducer;