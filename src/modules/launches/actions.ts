import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Launch} from '../../models/launch';
import {RootState} from '../../redux/configureStore';
import {getLaunchesService} from './api';

export interface GetLaunchesActionParams {
  sortBy?: string;
  orderBy?: string;
  year?: string;
}

export const getLaunches = createAsyncThunk<
  Launch[],
  GetLaunchesActionParams,
  {state: RootState}
>('LAUNCHES/getLaunches', async (launchesParams, {rejectWithValue}) => {
  try {
    let response = await getLaunchesService(launchesParams);
    return response.data;
  } catch (error) {
    return rejectWithValue('API Error');
  }
});
