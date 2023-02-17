import { Outlet, NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      <div className="app-bar">
        <NavLink className="link" to={'/'}>
          Home
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <Outlet />
    </nav>
  );
};
export default AppBar;
