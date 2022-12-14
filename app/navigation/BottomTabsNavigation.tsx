import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FunctionComponent, ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PRIMARY_COLOR} from '../styles/Styles';
import Home from '../views/HomeViews';
import IdealVolume from '../views/IdealVolumeViews';

const Tab = createBottomTabNavigator();

const BottomTabs: FunctionComponent = (): ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: '#6E6E6E',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Surfboard Volume',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({color, size}: {color: string; size: number}) => (
            <Icon name="surfing" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="IdealVolume"
        component={IdealVolume}
        options={{
          title: 'Ideal Volume',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({color, size}: {color: string; size: number}) => (
            <Icon name="human-greeting" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: 'Jost-Medium',
  },
});

export default BottomTabs;
