import { Link, Outlet, NavLink } from 'react-router-dom';

const authNav = () => {
  return (
    <div>
      <NavLink className="link register" to={'register'}>
        Register
      </NavLink>
      <NavLink className="link" to={'login'}>
        Login
      </NavLink>
    </div>
  );
};

export default authNav;
