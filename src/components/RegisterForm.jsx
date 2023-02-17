import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/AuthOperations';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputChange = ev => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;
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
    dispach(register({ name: name, email: email, password: password }));
    navigate('/contacts');

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <label>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputChange}
        />
      </label>
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
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Your password"
          minLength="7"
          required
          value={password}
          onChange={inputChange}
        />
      </label>
      <button className="button btn" type="submit">
        <p>Register</p>
      </button>
    </form>
  );
};

export default RegisterForm;
