import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-[36px]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
