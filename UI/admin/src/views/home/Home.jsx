import { Outlet } from 'react-router';
import HomeSidebar from '../../components/common/homeSidebar/HomeSidebar';
const Home = () => {
  return (
    <div>
      <HomeSidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
