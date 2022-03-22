import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/configureStore';
import {Home} from './src/screen/Home';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/components/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
