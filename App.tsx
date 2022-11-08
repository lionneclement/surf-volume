import {NavigationContainer} from '@react-navigation/native';
import React, {FunctionComponent, ReactElement, useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {showAppReview} from './app/helpers/AppReviewHelper';
import BottomTabs from './app/navigation/BottomTabsNavigation';

Orientation.lockToPortrait();

const App: FunctionComponent = (): ReactElement => {
  useEffect(() => {
    SplashScreen?.hide();
  });

  useEffect(() => {
    showAppReview();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
