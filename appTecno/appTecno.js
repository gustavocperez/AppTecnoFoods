import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-community/picker';
import Login from './appTecno/src/Pages/Login';
import Home from './appTecno/src/Pages/Home';

const Stack = createStackNavigator();

export default function meuApp(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' >
          <Stack.Screen 
          name='Login' 
          component={Login}
          options={{
            title:'Login',
            headerShown: false,
          }}
          />
          <Stack.Screen name='Home' component={Home} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }




