import { Outlet } from 'react-router';
import HomeHeader from '../components/common/homeHeader/HomeHeader';
import HomeSidebar from '../components/common/homeSidebar/HomeSidebar';
import style from './MainLayout.module.css';
const MainLayout = () => {
  return (
    <div className={style.page}>
      <HomeHeader />
      <div
        style={{
          flex: 1,
          display: 'flex',
          // flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <HomeSidebar />
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
