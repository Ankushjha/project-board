import React from 'react';

const MenuItem = ({ icon, label, hasNotification }) => {
    return (
        <div className="menu-item flex items-center px-2 py-1.5 hover:rounded-lg ">
          <span className=' text-slate-400 font-icon-size'>{icon}</span>
          <span className='ps-2 text-sm'>{label}</span>
          {hasNotification && <span className="notification-dot w-2 h-2 bg-yellow-600 inline-block rounded-full ms-1.5"></span>}
        </div>
      );
}

export default MenuItem;
