import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export const PablicRoute = ({ component: Component, redirectTo = '' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(Component);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
