import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
const About = () => {
  const navigate = useNavigate();
  const { authenticated, login, logout } = useAuth();
  useEffect(() => {
    // if (!authenticated) navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {authenticated ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please login to access this content.</p>
      )}
      <Link to='/login'>Profile</Link>
      About page
    </div>
  );
};

export default About;
