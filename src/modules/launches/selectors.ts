import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../redux/configureStore';
import {Launch} from '../../models/launch';

const launchesState = (state: RootState) => state.launches;

export const launchesSelector = createSelector(
  launchesState,
  launches => launches,
);
