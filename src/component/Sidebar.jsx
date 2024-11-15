import React from 'react';
import { BiHomeAlt2, BiCheckCircle, BiBell, BiGitCompare, BiCaretDown, BiPlus, BiFolder, BiUser } from "react-icons/bi";
import { TbUsersGroup } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import MenuItem from './MenuItem';
import SidebarHeadMenu from './SidebarHeadMenu';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

    const mainMenuItems = [
        { icon: <BiHomeAlt2 />, label: 'Home', link: "#" },
        { icon: <BiCheckCircle />, label: 'My tasks', link: "#" },
        { icon: <BiBell />, label: 'Inbox', hasNotification: true, link: "#" },
    ];

    const insightsMenu = [
        { icon: <BiGitCompare />, label: 'Reporting', link: "#" },
        { icon: <BiFolder />, label: 'Portfolios', link: "#" },
        { icon: <BiUser />, label: 'Goals', link: "#" },
    ]

    const projectsMenu = [
        { icon: <TbUsersGroup />, label: 'Develop Circuit Board - [P...', isProject: true, link: "./project" },
    ]

    const teamMenu = [
        { icon: <TbUsersGroup />, label: 'My workspace', link: "#" },
    ]

    const icons = [
        {
            downIcon: <BiCaretDown />,
            plusIcon: <BiPlus />,
        }

    ]

    return (
        <div className='bg-sidebar text-color w-60 font-sm h-screen'>
            <div className='top-sidebar h-1/6  border-bottom border-inherit border-solid'>
                <a href='#' className='flex items-center'>
                    <div className="sidebar-menu-item p-3">
                        {mainMenuItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                icon={item.icon}
                                label={item.label}
                                hasNotification={item.hasNotification}
                            />
                        ))}
                    </div>
                </a>
            </div>

            <div className="h-3/5 border-bottom border-inherit border-solid">
                {/* Insights Menu Sidebar  */}
                <div className="insightsMenuSidebar">
                    {/*<div className='insights flex items-center justify-between mt-4 me-4 text-color'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className='inline-flex items-center'>
                            <span style={styles.icon}>
                                <BiCaretDown />
                            </span>
                            <span className='text-sm font-semibold ms-1.5'>Insights</span>
                        </div>
                        <div className='text-slate-400 font-bold text-lg plus-icon hover:rounded-md p-0.5'>
                            <BiPlus />
                        </div>
                    </div> */}

                    <SidebarHeadMenu text="Insights" hiddenIcon={icons[0].downIcon} plusIcon={icons[0].plusIcon}></SidebarHeadMenu>

                    <a href='#' className='flex items-center'>
                        <div className="sidebar-menu-item p-3 pb-0">
                            {insightsMenu.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    icon={item.icon}
                                    label={item.label}
                                    hasNotification={item.hasNotification}
                                />
                            ))}
                        </div>
                    </a>
                </div>

                {/* Projects Menu sidebar  */}

                <div className="projectsMenuSidebar">
                    <SidebarHeadMenu text="Projects" hiddenIcon={icons[0].downIcon} plusIcon={icons[0].plusIcon}></SidebarHeadMenu>
                    {projectsMenu.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.link}
                            className='flex items-center'>
                            <div className="sidebar-menu-item p-3 pb-0">
                                <MenuItem

                                    icon={item.icon}
                                    label={item.label}
                                    hasNotification={item.hasNotification}
                                />
                            </div>
                        </NavLink>
                    ))}
                </div>

                {/* teams menu sidebar  */}

                <div className="teamMenuSidebar">
                    <SidebarHeadMenu text="Teams" hiddenIcon={icons[0].downIcon}></SidebarHeadMenu>
                    <a href='#' className='flex items-center'>
                        <div className="sidebar-menu-item p-3">
                            {teamMenu.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    icon={item.icon}
                                    label={item.label}
                                    hasNotification={item.hasNotification}
                                />
                            ))}
                        </div>
                    </a>
                </div>
            </div>
            {/* sidebar footer section  */}

            <div className='footerMenuSidebar text-sm text-color mt-4 flex flex-col items-center justify-center'>
                <button className="invite flex items-center justify-center w-4/5 p-1.5 border rounded-md mb-2">
                    <CiMail className='text-slate-400 font-icon-size me-1.5' />
                    <span className=''>Invites teammates</span>
                </button>
                <button href='#' className="help text-center w-4/5 p-1.5 hover:rounded-md">
                    Help with Caley
                </button>
            </div>


        </div>
    );
}

export default Sidebar;
