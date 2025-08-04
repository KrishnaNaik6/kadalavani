import { Link } from 'react-router-dom';
import style from './HomeSidebar.module.css';
const HomeSidebar = () => {
  return (
    <div style={{ borderRight: '1px solid #ccc', width: 140 }}>
      <div style={{ color: 'blue', fontSize: 14, marginLeft: 10 }}>
        <Link to='/dashboard'>
          <div style={{ padding: 5, cursor: 'pointer' }}> Dashboard</div>
        </Link>
        <Link to='/categories'>
          <div style={{ padding: 5, cursor: 'pointer' }}> Categories</div>
        </Link>
        <Link to='/tags'>
          <div style={{ padding: 5, cursor: 'pointer' }}> Tags</div>
        </Link>
        <Link to='/news'>
          <div style={{ padding: 5, cursor: 'pointer' }}> News</div>
        </Link>
      </div>
    </div>
  );
};
export default HomeSidebar;
