import React from 'react';
import { IconContext } from "react-icons";
import { DiBrackets } from "react-icons/di";
import { BiCustomize } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";
import { CiCircleInfo, CiStar } from "react-icons/ci";
import { FaTimeline } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { WiStars } from "react-icons/wi";
import { MdOutlineLeaderboard, MdTimeline, MdCalendarToday, MdAttachFile } from "react-icons/md";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { LuClipboardList, LuWorkflow, LuMessageSquare } from "react-icons/lu";
import ProjectNavigation from "./ProjectNavigation";
import { NavLink, Outlet } from 'react-router-dom';
import Board from '../pages/Board';

const ProjectPage = () => {

    const projectNavigation = [
        { icon: <LuClipboardList />, label: 'Overview', link: "overview" },
        { icon: <TfiLayoutListThumb />, label: 'List', link: "list" },
        { icon: <MdOutlineLeaderboard />, label: 'Board', link: "board" },
        { icon: <FaTimeline />, label: 'Timeline', link: "timeline" },
        { icon: <MdTimeline />, label: 'Dashboard', link: "dashboard" },
        { icon: <MdCalendarToday />, label: 'Calendar', link: "calender" },
        { icon: <LuWorkflow />, label: 'Workflow', link: "workflow" },
        { icon: <LuMessageSquare />, label: 'Messages', link: "messages" },
        { icon: <MdAttachFile />, label: 'Files', link: "files" },
    ]

    return (
        <div className='mt-3 w-screen'>

            <div className="projectTopbar border-b border-inherit border-solid px-4">

                {/* top Project name section  */}

                <div className="projectnametop flex items-center justify-between">

                    {/* Project name left section with name and all  */}
                    <div className="projectnametop-left flex items-center">
                        <IconContext.Provider value={{ className: "text-4xl text-cyan-300" }}>
                            <DiBrackets />
                        </IconContext.Provider>

                        <div className='me-1 border border-white hover:border hover:border-slate-700 rounded-md'>
                            <span className='project-heading text-xl px-1 font-semibold'>Develop Curcuit Board - [Project Name]</span>
                        </div>
                        <div className='down-icon p-1 rounded-md me-1 text-xl'><VscChevronDown /></div>
                        <div className='star-icon font-icon-size p-1 rounded-md hover:text-cyan-300'><CiStar /></div>

                        <div className='status flex items-center p-1 rounded-md ms-1.5'>
                            <CiCircleInfo />
                            <span className='font-thin text-sm mx-1'>Set Status</span>
                            <IconContext.Provider value={{ className: "text-xs" }}>
                                <VscChevronDown />
                            </IconContext.Provider>
                        </div>
                    </div>

                    {/* Project name right section with buttons of user and customize one  */}

                    <div className="projectnametop-right text-xs flex items-center">
                        <div className='me-2 border-right flex items-center'>
                            <button className='user-option rounded-full p-1 px-1.5 border-color me-2'>An</button>
                            <button className='share-button flex items-center rounded-md p-1.5 border-color me-2 text-color bg-blue-700 hover:bg-blue-800'>
                                <ImUsers />
                                <span className='ms-1'>Share</span>
                            </button>
                            <button className='ask-button flex items-center rounded-md p-1 px-1.5 border-color me-2'>
                                <IconContext.Provider value={{ className: "text-xl" }}>
                                    <WiStars />
                                </IconContext.Provider>
                                <span className='ms-1'>Ask AI</span>
                            </button>
                        </div>
                        <button className='customize-button flex items-center rounded-md p-1 px-1.5 border-color'>
                            <IconContext.Provider value={{ className: "text-xl" }}>
                                <BiCustomize />
                            </IconContext.Provider>
                            <span className='ms-1'>Customize</span>
                        </button>
                    </div>
                </div>

                {/* Navigation part  */}
                <div className="projectNavigation">
                    <div className='flex items-center'>
                        <div className="p-3 pb-0 flex">
                            {projectNavigation.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.link}
                                    className={({ isActive }) => isActive ? "projectNavigation-item-active projectNavigation-item flex items-center me-4 py-1 px-1 hover:rounded-t-lg" : "projectNavigation-item flex items-center me-4 py-1 px-1 hover:rounded-t-lg"}>

                                    <span className=' text-slate-500 text-sm'>{item.icon}</span>
                                    <span className='ps-1 text-sm text-slate-500 font-medium'>
                                        {item.label}
                                    </span>
                                    {/* <ProjectNavigation
                                        key={index}
                                        icon={item.icon}
                                        label={item.label}
                                        link={item.link}
                                        hasNotification={item.hasNotification}
                                    /> */}
                                </NavLink>
                            ))}
                            <button className='projectNav-plus px-1.5 text-xl pb-1.5 hover:rounded-t-lg'>+</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body part  */}

            <div className="projectBody">
                <Outlet />
            </div>
        </div>
    );
}

export default ProjectPage;
