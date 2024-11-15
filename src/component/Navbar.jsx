import React from 'react';
import { RxHamburgerMenu, RxPlus, RxChevronDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IconContext } from "react-icons";

const Navbar = () => {
    return (
        <>
            <div className='bg-navbar h-12 text-white flex items-center justify-between border-bottom'>
                <div className='left-navbar flex items-center content-center'>
                    <IconContext.Provider value={{ className: "ms-5 text-2xl" }}>
                        <div>
                            <RxHamburgerMenu />
                        </div>
                    </IconContext.Provider>

                    <a href='#' className='create-button flex items-center content-center border border-slate-500 rounded-full px-2 mx-4 py-1'>
                        <IconContext.Provider value={{ className: "bg-red-500 rounded-full text-l" }}>
                            <div>
                                <RxPlus />
                            </div>
                        </IconContext.Provider>
                        <div className='mx-2 text-sm p-0'>Create</div>
                    </a>
                </div>

                <div className='middle-navbar relative flex items-center'>
                    <IconContext.Provider value={{ className: "absolute font-icon-size icon-position" }}>
                        <div>
                            <IoIosSearch />
                        </div>
                    </IconContext.Provider>
                    <input type="search" name="search" id="search" className='navbar-search focus:outline-none ps-8 rounded-full text-sm ' placeholder='Search My workspace' />
                </div>

                <div className="right-navbar flex">
                    <a href='#' className='add-billing-info rounded-md text-xs text-black flex justify-center items-center align-middle px-2'>
                        Add billing info
                    </a>
                    <div>
                        <a href="#" className='flex ms-3 me-5 items-center'>
                            <div className='user-option text-black text-xs p-1 px-1.5 rounded-full me-1'>An</div>
                            <RxChevronDown />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
