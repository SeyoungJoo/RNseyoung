import {getLaunches} from '../actions';
import {EmptyObject} from 'redux';
import {launchReducer} from '../reducer';
import mockLaunch from '../../../data/launch.json';
import {Launch} from '../../../models/launch';

describe('Nandos reducer', () => {
  test(`should put restaurants in the state after dispatch ${getLaunches.fulfilled}`, () => {
    const state: Launch[] | EmptyObject = [];

    const action = {
      meta: {
        requestId: 'Hbqt3tV91Pod8AtkqXgYk',
        requestStatus: 'fulfilled',
      },
      payload: mockLaunch,
      type: getLaunches.fulfilled,
    };

    expect(launchReducer(state, action)).toStrictEqual(mockLaunch);
  });
});
