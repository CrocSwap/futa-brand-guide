import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FutaNewLanding from './pages/FutaNewLanding/FutaNewLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FutaNewLanding/>
    </>
  )
}

export default App
