import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
