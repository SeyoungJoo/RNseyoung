import mockLaunch from '../../../data/launch.json';
import {RootState} from '../../../redux/configureStore';
import {launchesSelector} from '../selectors';

describe('Products selectors', () => {
  let state: RootState;

  beforeEach(() => {
    state = {
      launches: mockLaunch,
    } as RootState;
  });

  test('Restaurants Nandos selector', () => {
    expect(launchesSelector(state)).toStrictEqual(mockLaunch);
  });
});
