import './App.css'
import Counter from '../src/components/Counter'
import ThemeToggle from './components/ThemeToggle'
import Todo from './components/Todo'
import { TodoProvider } from './context/TodoContext'
import TodoUseContextApp from './components/TodoUseContextApp'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggleContext from './components/ThemeToggleContext'
import ThemedBoxContext from './components/ThemedBoxContext'

function App() {

  return (
    <>
  <h1> React Context </h1>
    <TodoProvider>
      <TodoUseContextApp />
    </TodoProvider>
    <ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <ThemeToggleContext />
        <ThemedBoxContext />
      </div>
    </ThemeProvider>

    <h1> Redux </h1>
  <Counter />
  <ThemeToggle />
  <Todo />

    </>
  )
}

export default App
