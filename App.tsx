import React, {FunctionComponent, ReactElement} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/views/Home';

const App: FunctionComponent = (): ReactElement => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
