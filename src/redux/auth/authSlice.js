import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  loading: false,
  loadingUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(loginUser.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(logoutUser.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.loading = false;
        state.error = payload;
      })

      .addCase(getCurrentUser.pending, (state, _) => {
        state.loadingUser = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.loadingUser = false;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.loadingUser = false;
        state.token = null;
        state.error = payload;
      });
  },
});
