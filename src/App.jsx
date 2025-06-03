import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from '../Component/Main'
import IphoneCalculator from '../Component/IphoneCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div className='flex justify-center'>

    {/* <Main /> */}
    <IphoneCalculator/>
    </div>
  )
}

export default App
