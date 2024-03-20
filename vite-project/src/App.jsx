import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Body from './components/Body'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='main'>
      <Header />
      <Body />
    </main>
  )
}

export default App
