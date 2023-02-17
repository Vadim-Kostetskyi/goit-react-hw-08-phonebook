import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContactsApi, addContactsApi } from 'redux/contactApi';
import { logIn } from 'redux/AuthOperations';
import { addTask } from 'redux/Slise';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputChange = ev => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    switch (inputName) {
      case 'email':
        setEmail(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = el => {
    el.preventDefault();

    dispach(logIn({ email: email, password: password }));
    navigate('/contacts');

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <h2>Email</h2>
      <label>
        <input
          type="email"
          name="email"
          //   pattern="/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/"
          title="Your email"
          required
          value={email}
          onChange={inputChange}
        />
      </label>
      <h2>Password</h2>
      <label>
        <input
          type="password"
          name="password"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Your password"
          minLength="7"
          required
          value={password}
          onChange={inputChange}
        />
      </label>
      <button className="button btn enter" type="submit">
        <p>Enter</p>
      </button>
    </form>
  );
};

export default LoginForm;
