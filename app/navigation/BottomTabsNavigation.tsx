import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FunctionComponent, ReactElement} from 'react';
import Home from '../views/HomeViews';
import IdealVolume from '../views/IdealVolumeViews';

const Tab = createBottomTabNavigator();

const BottomTabs: FunctionComponent = (): ReactElement => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{title: 'Surfboard Volume'}}
      />
      <Tab.Screen
        name="IdealVolume"
        component={IdealVolume}
        options={{title: 'Ideal Volume'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
