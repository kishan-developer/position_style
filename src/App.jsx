import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='static bg-red-500 w-[500px] h-screen'>
        <div>main </div>
        <div className=' static w-[600px] h-[150px]'>
          <div className='relative top-0 left-0 bg-yellow-200 w-[400px] h-[100px]'>child 1</div>
        </div>

        <div className='bg-blue-900 w-full h-20 py-5'>
          <div className='absolute top-0 left-0 bg-blue-50'>child 2</div>
        </div>
      </div>
    </>
  )
}

export default App
