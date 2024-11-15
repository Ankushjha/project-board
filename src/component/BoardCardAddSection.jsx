import React from 'react'
import { FaPlus } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { Tooltip } from 'react-tooltip';

const BoardCardAddSection = () => {
    return (
        <div className="group card w-80 rounded-md min-h-screen">
            <div className="card-topbar flex justify-between mb-3">
                <button className="card-button group-hover:bg-[#f3f1f1] w-full font-bold cursor-pointer text-slate-500 border border-transparent hover:text-black rounded-lg py-2 text-center">
                    <span className='text-lg'>+</span> Add section
                </button>
            </div>

            <div className="card-body group-hover:bg-[#f3f1f1] min-h-screen rounded-lg p-3">

            </div>

        </div>
    )
}

export default BoardCardAddSection