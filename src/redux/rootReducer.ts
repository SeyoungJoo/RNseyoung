import {combineReducers} from '@reduxjs/toolkit';
import {launchReducer} from '../modules/launches/reducer';
import {statusReducer} from '../modules/status/reducer';

export const rootReducer = combineReducers({
  launches: launchReducer,
  status: statusReducer,
});
