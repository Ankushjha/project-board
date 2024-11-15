import React from 'react'
import { FaPlus } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { Tooltip } from 'react-tooltip';

const BoardCard = () => {
  return (
    <div className="card w-80 border border-slate-200 rounded-md min-h-screen">
        <div className="card-topbar flex justify-between m-3">
            <div className="card-left flex gap-2 font-bold">
                <h3 className="name ">Untitled Name</h3>
                <div className="task-count text-slate-500 font-normal cursor-pointer" data-tooltip-id='card-task-number' data-tooltip-content="1 task in this group">1</div>
                <Tooltip id='card-task-number' className='font-normal'/>
            </div>

            <div className="card-right font-bold text-md text-slate-500 flex gap-2 h-auto items-center">
                <span className='hover:bg-[#f6f4f4] cursor-pointer p-1 rounded'><FaPlus /></span>
                <span className='hover:bg-[#f6f4f4] cursor-pointer p-1 rounded'><SlOptions /></span>
            </div>
        </div>

        <div className="card-body bg-[#f6f4f4] min-h-screen rounded-lg p-3">
        <button className="card-button hover:bg-slate-100 w-full font-bold cursor-pointer text-slate-500 border border-transparent hover:text-black hover:border hover:border-slate-200 rounded-lg py-2 text-center">
            <span className='text-lg'>+</span> Add task
        </button>
                    
        </div>
    </div>
  )
}

export default BoardCard