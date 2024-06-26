import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CoachList from '../pages/CoachList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 100,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bcbc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen 
        name="CoachList" 
        component={CoachList} 
        options={{
          tabBarLabel: 'Coaches',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="easel" size={size} color={focused ? '#8257e5' : color}/>
            );
          }
        }}
      />
      <Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="heart" size={size} color={focused ? '#8257e5' : color}/>
            );
          }
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;