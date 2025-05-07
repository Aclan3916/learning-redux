import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemedBoxContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        return <div>Error: ThemeContext not found.</div>;
      }

    const { theme } = context;

    const styles : React.CSSProperties = {
        backgroundColor : theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '8px',
        textAlign: 'center' as const,
    };

  return (
    <div>
      <div style={styles}>
        <p>The current theme is <strong>{theme}</strong></p>
      </div>
    </div>
  )
}

export default ThemedBoxContext
