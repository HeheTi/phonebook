import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handlerSubmitRegister = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }

    dispatch(registerUser({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handlerSubmitRegister}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <TextField
          sx={{ width: 400 }}
          required
          color="secondary"
          id="outlined-required-name"
          label="Name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <TextField
          sx={{ width: 400 }}
          required
          color="secondary"
          id="outlined-required-email"
          label="Email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <FormControl
          sx={{ width: 400 }}
          variant="outlined"
          color="secondary"
          required
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <button type="submit">Register</button>
      </Box>
    </>
  );
};

export default RegisterPage;
