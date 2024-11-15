import React from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import ProjectPage from '../component/ProjectPage'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen flex'>
                <Sidebar />
                {/* Content changes here based on the route */}
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home