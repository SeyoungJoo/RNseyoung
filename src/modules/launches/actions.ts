import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Launch} from '../../models/launch';
import {RootState} from '../../redux/configureStore';

interface GetLaunchesActionParams {
  sortBy?: string;
  orderBy?: string;
  year?: string;
}

export const getLaunches = createAsyncThunk<
  Launch[],
  GetLaunchesActionParams,
  {state: RootState}
>(
  'LAUNCHES/getLaunches',
  async ({sortBy, orderBy, year}, {rejectWithValue}) => {
    try {
      let response = await axios({
        baseURL: 'https://api.spacexdata.com/v3',
        url: '/launches',
        method: 'get',
        params: {sort: sortBy, order: orderBy, launch_year: year},
      });
      return response.data;
    } catch (error) {
      return rejectWithValue('API Error');
    }
  },
);
