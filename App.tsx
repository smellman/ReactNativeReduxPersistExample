/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store';
const App = (): JSX.Element => {
  const [error, setError] = useState<Error>();
  const [loaded, setLoaded] = useState<{MainApp:() => JSX.Element}>();

  useEffect(() => {
    Promise.all([import('./src/MainApp')])
      .then(([{MainApp}]) => {
        setLoaded({MainApp});
      })
      .catch(setError);
  }, [loaded]);

  if (error !== undefined) {
    return (
      <SafeAreaView>
        <Text>{`Error while initing:\n${String(error)}`}</Text>
      </SafeAreaView>
    );
  }
  if (loaded !== undefined) {
    try {
      const loading = (
        <SafeAreaView>
          <Text>loading now ...</Text>
        </SafeAreaView>
      );
      return (
        <SafeAreaView>
          <Provider store={store}>
            <PersistGate loading={loading} persistor={persistor}>
              <loaded.MainApp />
            </PersistGate>
          </Provider>
        </SafeAreaView>
      );
    } catch (err) {
      return (
        <SafeAreaView>
          <Text>{`Error:${String(err)}`}</Text>
        </SafeAreaView>
      );
    }
  }
  return (
    <SafeAreaView>
      <Text>init</Text>
    </SafeAreaView>
  );
};

export default App;
