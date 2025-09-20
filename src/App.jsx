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
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Coming Soon: Your ultimate resource for mastering code and technology.
        </p>
      </div>
      <p className="read-the-docs">
        We're building something amazing! Get ready for a new way to learn technical skills.
      </p>
    </>
  )
}

export default App
