import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {rootReducer} from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export const injectStore = (_store: EnhancedStore) => {
  store = _store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
