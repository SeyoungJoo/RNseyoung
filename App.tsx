import React, {useState, useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './src/components/Header';
import {getLaunches} from './src/modules/launches/actions';
import {injectStore, store} from './src/redux/configureStore';
import {Home} from './src/screen/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
