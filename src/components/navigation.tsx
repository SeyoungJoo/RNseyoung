import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screen/Home';
import {SpaceItemDetails} from './SpaceItemDetails';

export type RootStackParams = {
  Home: undefined;
  SpaceItemDetails: {
    item: {
      mission_name: string;
      launch_date_utc: string;
      rocket: {rocket_name: string};
      launch_site: {site_name_long: string};
    };
  };
};

const RootStack = createStackNavigator<RootStackParams>();

const ContactsStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen name="Home" component={Home} />
    <RootStack.Screen name="SpaceItemDetails" component={SpaceItemDetails} />
  </RootStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ContactsStackScreen />
  </NavigationContainer>
);
