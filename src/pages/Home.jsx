import React from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import ProjectPage from '../component/ProjectPage'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen flex'>
                <Sidebar />
                <ProjectPage />
            </div>
        </>
    )
}

export default Home