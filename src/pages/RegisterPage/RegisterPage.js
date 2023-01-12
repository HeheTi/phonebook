import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlerSubmitRegister = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }

    dispatch(registerUser({ name, email, password }));
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handlerSubmitRegister}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
