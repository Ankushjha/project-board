import React from 'react'
import BoardCard from '../component/BoardCard'
import { IoFilterSharp } from "react-icons/io5";
import { BiSort } from "react-icons/bi";
import { AiOutlineGroup } from "react-icons/ai";
import { CgOptions } from "react-icons/cg";

const Board = () => {
    return (
        <>

            <nav className='board-navbar text-sm text-slate-500 flex justify-between px-8 py-3 h-auto items-center border-b border-slate-200'>
                <div className="left-side flex border border-slate-300 h-auto items-center gap-1 px-2 rounded cursor-pointer">
                    <span className='font-bold text-lg'>+</span>Add Item
                </div>
                <div className="right-side flex gap-5">
                    <span className='flex h-auto items-center gap-1 cursor-pointer'>
                        <IoFilterSharp />
                        Filter
                    </span>

                    <span className='flex h-auto items-center gap-1 cursor-pointer'>
                        <BiSort />
                        Sort
                    </span>

                    <span className='flex h-auto items-center gap-1 cursor-pointer'>
                        <AiOutlineGroup />
                        Group
                    </span>

                    <span className='flex h-auto items-center gap-1 cursor-pointer'>
                        <CgOptions />
                        Options
                    </span>
                </div>
            </nav>

            <section className='bg-[#F9F8F8] pt-5 px-10 text-sm min-h-screen'>

                <BoardCard />
            </section>
        </>
    )
}

export default Board