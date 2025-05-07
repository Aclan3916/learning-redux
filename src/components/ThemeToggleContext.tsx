import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggleContext = () => {
    const context = useContext(ThemeContext);

    if(!context) 
    {
        return <div> Error</div>
    }

    const { theme, toggleTheme } = context;

    return(
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'light'}
        </button>
    )
}

export default ThemeToggleContext;