import { Link, Outlet, NavLink } from 'react-router-dom';
import { logOut } from 'redux/AuthOperations';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <div className="user-menu">
      <Link className="link" to={'contacts'}>
        Contacts
      </Link>
      <div className="user-menu_box">
        <p className="user-menu_text">Welcome {user.name}</p>
        <Link
          to={'/'}
          className="link"
          onClick={() => {
            console.log();
            dispatch(logOut());
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Home;
