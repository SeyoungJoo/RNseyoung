import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/configureStore';
import {Home} from './src/screen/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
