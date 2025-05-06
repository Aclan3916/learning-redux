import { createSlice } from '@reduxjs/toolkit'

//defines type
interface ThemeState {
    mode: 'light' | 'dark';
}


//defines initial state
const initialState: ThemeState = {
    mode: 'light'
}

//defines createSlice with actions and reducer functions
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;