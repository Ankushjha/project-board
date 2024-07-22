import React from 'react';
import './style.css'

const MenuItem = ({ icon, label}) => {
    return (
        <a className="projectNavigation-item flex items-center me-4 py-1 px-1 hover:rounded-t-lg">
          <span className=' text-slate-500 text-sm'>{icon}</span>
          <span className='ps-1 text-sm text-slate-500 font-medium'>{label}</span>
        </a>
      );
}

export default MenuItem;
