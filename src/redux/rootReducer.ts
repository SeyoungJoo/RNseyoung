import {combineReducers} from '@reduxjs/toolkit';
import {launchReducer} from '../modules/launches/reducer';

export const rootReducer = combineReducers({
  launches: launchReducer,
});
