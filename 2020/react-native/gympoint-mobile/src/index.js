import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import App from './App';

import { store, persistor } from '~/store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <App />
      </PersistGate>
    </Provider>
  );
}
