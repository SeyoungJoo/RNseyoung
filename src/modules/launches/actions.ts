import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Launch} from '../../models/launch';
import {RootState} from '../../redux/configureStore';

export const getLaunches = createAsyncThunk<Launch[], void, {state: RootState}>(
  '_',

  //redux toolkit
  async (_, {rejectWithValue}) => {
    try {
      let response = await axios('https://api.spacexdata.com/v3/launches');
      return response.data;
    } catch (error) {
      return rejectWithValue('API Error');
    }
  },
);
