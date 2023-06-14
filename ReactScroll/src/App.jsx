import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Scroll } from './Components/Scroll'  


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='App'>
    
    {/* add in the Scroll Bar here  */}
    <Scroll/>
    
    
    
    </div>
    </>
    
    
  )
}

export default App
