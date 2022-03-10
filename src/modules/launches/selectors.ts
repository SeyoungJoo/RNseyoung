import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../redux/configureStore';

const launchesState = (state: RootState) => state.launches;

export const launchesSelector = createSelector(
  launchesState,
  launches => launches,
);

export const findByYearSelector = createSelector(
  launchesState,
  (_: RootState, year: string) => year,
  (launches, year) => {
    const res = launches.find(launch => {
      return launch.launch_year === year;
    });
  },
);
