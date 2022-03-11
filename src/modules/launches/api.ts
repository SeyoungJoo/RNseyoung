import axios, {AxiosResponse} from 'axios';
import {Launch} from '../../models/launch';
import {RootState} from '../../redux/configureStore';
import {GetLaunchesActionParams} from './actions';

export const getLaunchesService = async ({
  sortBy,
  orderBy,
  year,
}: GetLaunchesActionParams): Promise<AxiosResponse<Launch[]>> => {
  return axios({
    baseURL: 'https://api.spacexdata.com/v3',
    url: '/launches',
    method: 'get',
    params: {sort: sortBy, order: orderBy, launch_year: year},
  });
};
