jest.mock('../api', () => ({
  getLaunchesService: jest.fn().mockResolvedValue([]),
}));

import {getLaunches} from '../actions';
import {getLaunchesService} from '../api';

describe('getRestaurants', () => {
  const dispatch = jest.fn();
  const getState = jest.fn().mockReturnValue([]);

  test('Should execute getRestaurants', async () => {
    await getLaunches({})(dispatch, getState, {});
    expect(getLaunchesService).toHaveBeenCalledTimes(1);
  });
});
