import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import Home from './src/Config/Screens/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import Signup from './src/Config/Screens/signup';
import Signin from './src/Config/Screens/signin';
// import Signup from './src/Config/Screens/signup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
