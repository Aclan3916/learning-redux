import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../app/store'
import { toggleTheme } from '../features/theme/themeSlice'

const ThemeToggle = () => {

    //reading the state from the store
    const mode = useSelector(( state : RootState) => state.theme.mode);
    const dispatch = useDispatch<AppDispatch>();


  return (
    <div style={{ marginTop: '2rem' }}>
        <p> Current Theme: <strong>{mode}</strong></p>   
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  )
}

export default ThemeToggle
