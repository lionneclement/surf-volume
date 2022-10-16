import React, {FunctionComponent, ReactElement} from 'react';
import Orientation from 'react-native-orientation-locker';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/views/Home';

Orientation.lockToPortrait();

const App: FunctionComponent = (): ReactElement => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
