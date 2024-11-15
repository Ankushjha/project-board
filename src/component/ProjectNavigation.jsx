import { Link } from "react-router-dom";

const MenuItem = ({ icon, label, link }) => {
  return (
    <a className="projectNavigation-item flex items-center me-4 py-1 px-1 hover:rounded-t-lg">
      <span className=' text-slate-500 text-sm'>{icon}</span>
      <span className='ps-1 text-sm text-slate-500 font-medium'>
        <Link to={link}>{label}</Link>
      </span>
    </a>
  );
}

export default MenuItem;
