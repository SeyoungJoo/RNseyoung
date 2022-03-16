import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screen/Home';
import {SpaceItemDetails} from './SpaceItemDetails';

type StackParamList = {
  Home: string;
  SpaceItemDetails: {id: string};
};
const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator>
    <ContactsStack.Screen name="Home" component={Home} />
    <ContactsStack.Screen
      name="SpaceItemDetails"
      component={SpaceItemDetails}
    />
  </ContactsStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ContactsStackScreen />
  </NavigationContainer>
);
