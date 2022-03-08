import {createReducer} from '@reduxjs/toolkit';
import {EmptyObject, Reducer} from 'redux';
import {getLaunches} from './actions';
import {Launch} from '../../models/launch';

const initialState: Launch[] | EmptyObject = [];

export const launchReducer: Reducer<Launch[] | []> = createReducer<
  Launch[] | []

  //when completely start new app, initialState happen (when it's empty array)
>(initialState, builder => {
  builder.addCase(getLaunches.fulfilled, (state, action) => action.payload);
});
