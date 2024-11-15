import { NavLink } from "react-router-dom";

const MenuItem = ({ icon, label, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => isActive ? "projectNavigation-item-active projectNavigation-item flex items-center me-4 py-1 px-1 hover:rounded-t-lg" : "projectNavigation-item flex items-center me-4 py-1 px-1 hover:rounded-t-lg"}>
      <span className=' text-slate-500 text-sm'>{icon}</span>
      <span className='ps-1 text-sm text-slate-500 font-medium'>
        {label}
      </span>
    </NavLink>
  );
}

export default MenuItem;
