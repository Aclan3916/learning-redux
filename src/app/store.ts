import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: {

        //This is where slices go
        counter: counterReducer,
        theme: themeReducer, //registerd counter slice under the counter key
        todo: todoReducer
    },
});

//these types help with useDispatch and useSelector later
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;