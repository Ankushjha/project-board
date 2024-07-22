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
import './style.css';
import ProjectNavigation from "./ProjectNavigation";

const ProjectPage = () => {

    const projectNavigation = [
        { icon: <TfiLayoutListThumb />, label: 'List' },
        { icon: <MdOutlineLeaderboard />, label: 'Board' },
        { icon: <FaTimeline />, label: 'Timeline' },
        { icon: <MdTimeline />, label: 'Dashboard' },
        { icon: <MdCalendarToday />, label: 'Calendar' },
        { icon: <LuClipboardList />, label: 'Overview' },
        { icon: <LuWorkflow />, label: 'Workflow' },
        { icon: <LuMessageSquare />, label: 'Workflow' },
        { icon: <MdAttachFile />, label: 'Files' },
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

                        <div className='me-1 hover:border border-slate-700 rounded-md'>
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
                    <a href='#' className='flex items-center'>
                        <div className="p-3 pb-0 flex">
                            {projectNavigation.map((item, index) => (
                                <ProjectNavigation
                                    key={index}
                                    icon={item.icon}
                                    label={item.label}
                                    hasNotification={item.hasNotification}
                                />
                            ))}
                            <button className='projectNav-plus px-1.5 text-xl hover:rounded-t-lg'>+</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
