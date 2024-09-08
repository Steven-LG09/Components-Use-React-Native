import { View,Text,StyleSheet } from 'react-native';
import Greeting from './Componentes/Greeting';
import  UserDetails from './Componentes/UserDetails';
import  Task from './Componentes/Task';
import  Toggletext from './Componentes/ToggleText';
import  DynamicForm from './Componentes/DynamicForm';
import  ClickCounter from './Componentes/ClickCounter';
import  RegistrationForm from './Componentes/RegistrationForm';
import ThemeSwitcher from './Componentes/ThemeSwitcher';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Componentes/Home';

const Stack = createNativeStackNavigator()

export default function App({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Greeting' component={Greeting}/>
        <Stack.Screen name='UserDetails' component={UserDetails}/>
        <Stack.Screen name='Task' component={Task}/>
        <Stack.Screen name='ToggleText' component={Toggletext}/>
        <Stack.Screen name='ClickCounter' component={ClickCounter}/>
        <Stack.Screen name='DynamicForm' component={DynamicForm}/>
        <Stack.Screen name='RegistrationForm' component={RegistrationForm}/>
      </Stack.Navigator>
      <View style={styles.container}>
        <Text style={styles.text}>Pantalla App.js</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: 'red',
    fontStyle: 'italic'
  },
});
