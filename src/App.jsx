import { useState } from 'react'
import ccLogo from './assets/ccLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={ccLogo} className="logo" alt="React logo" />
      </div>
      <h1>Coding Cosmos</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Coming Soon...
        </p>
      </div>
      <p className="read-the-docs">
        Site under development...
      </p>
    </>
  )
}

export default App
