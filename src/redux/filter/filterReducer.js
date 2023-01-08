import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './filterActions';

const initialState = '';

export const filterReducer = createReducer(initialState, builder => {
  builder.addCase(changeFilter, (_, action) => {
    return action.payload;
  });
});
