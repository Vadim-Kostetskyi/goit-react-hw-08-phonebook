import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import Home from './Home';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Form from './Form';
import { useEffect } from 'react';
import { refreshUser } from 'redux/AuthOperations';
import { useDispatch } from 'react-redux';
import { PablicRoute, PrivatRoute } from 'redux/PrivateRoute';
const Feedback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="box">
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          {/* <Route path="register" element={<RegisterForm />} /> */}
          <Route
            path="register"
            element={
              <PrivatRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          {/* <Route path="login" element={<LoginForm />} /> */}
          <Route
            path="login"
            element={
              <PrivatRoute redirectTo="/contacts" component={<LoginForm />} />
            }
          />
          {/* <Route path="contacts" element={<Form />}></Route> */}
          <Route
            path="contacts"
            element={<PablicRoute redirectTo="/login" component={<Form />} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export const App = () => {
  return <div>{<Feedback />}</div>;
};
