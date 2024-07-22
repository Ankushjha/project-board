import React, { useState } from 'react';
import './style.css'

const SidebarHeadMenu = ({text, hiddenIcon, plusIcon}) => {

    const [isHovered, setIsHovered] = useState(false);

    const styles = {

        fixedIcon: {
            marginRight: '5px',
        },

        hiddenIcon: {
            position: 'absolute',
            // left: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'opacity 0.1s ease',
            opacity: isHovered ? 1 : 0,
        },
    };

    return (
            <div
                onMouseEnter={() => setIsHovered(true)}
                className='insights flex items-center justify-between mt-4 me-4 text-color relative cursor-pointer'
                onMouseLeave={() => setIsHovered(false)}
            >

                <div className='inline-flex items-center'>
                    <span style={styles.hiddenIcon}>
                        {hiddenIcon}
                    </span>
                    <span className='text-sm font-semibold ms-5'>{text}</span>
                </div>
                <div className='text-slate-400 font-bold text-lg plus-icon hover:rounded-md p-0.5'>
                    {plusIcon}
                </div>

            </div>
    );
};

export default SidebarHeadMenu;

{/* <div className='insights flex items-center justify-between mt-4 me-4 text-color'
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
>
<div className='inline-flex items-center'>
    <span style={styles.hiddenIcon}>
        <BiCaretDown />
    </span>
    <span className='text-sm font-semibold ms-1.5'>Insights</span>
</div>
<div className='text-slate-400 font-bold text-lg plus-icon hover:rounded-md p-0.5'>
    <BiPlus />
</div> 
</div> */}