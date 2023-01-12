import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const USER_ENDPOINT = {
  SIGNUP: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  CURRENT: '/users/current',
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(USER_ENDPOINT.SIGNUP, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(USER_ENDPOINT.LOGIN, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, ThunkAPI) => {
    try {
      await axios.post(USER_ENDPOINT.LOGOUT);
      token.unset();
      return;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, ThunkAPI) => {
    const persistedToken = ThunkAPI.getState().auth.token;

    if (!persistedToken) {
      return ThunkAPI.rejectWithValue('Dont have token');
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get(USER_ENDPOINT.CURRENT);
      return data;
    } catch (error) {
      token.unset();
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
