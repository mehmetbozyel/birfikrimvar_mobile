import React from 'react';

import Router from './src/Router';
import NavigationService from './src/NavigationService';

//mobx store
import store from './src/store';

import {Provider} from 'mobx-react';

const App = () => {
  return (
    <Provider {...store}>
      <Router
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
