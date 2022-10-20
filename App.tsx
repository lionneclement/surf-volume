import React, {FunctionComponent, ReactElement, useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Home from './app/views/Home';

Orientation.lockToPortrait();

const App: FunctionComponent = (): ReactElement => {
  useEffect(() => {
    SplashScreen?.hide();
  });

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
