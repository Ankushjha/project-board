import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import ProjectPage from './component/ProjectPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar></Navbar>
       <div className='h-screen flex'>
        <Sidebar></Sidebar>
        <ProjectPage></ProjectPage>
        </div>
    </>
  )
}

export default App
