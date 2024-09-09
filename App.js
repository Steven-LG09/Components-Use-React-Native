import Greeting from './Componentes/Greeting';
import  UserDetails from './Componentes/UserDetails';
import  Task from './Componentes/Task';
import  Toggletext from './Componentes/ToggleText';
import  DynamicForm from './Componentes/DynamicForm';
import  ClickCounter from './Componentes/ClickCounter';
import  RegistrationForm from './Componentes/RegistrationForm';
import ThemeSwitcher from './Componentes/ThemeSwitcher';
import AlertButton from './Componentes/AlertButton';
import ParentCounter from './Componentes/ParentCounter';
import ChildCounter from './Componentes/ChildCounter';
import ImageGallery from './Componentes/ImageGallery';
import ImageList from './Componentes/ImageList';
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
        <Stack.Screen name='ThemeSwitcher' component={ThemeSwitcher}/>
        <Stack.Screen name='AlertButton' component={AlertButton}/>
        <Stack.Screen name='ParentCounter' component={ParentCounter}/>
        <Stack.Screen name='ChildCounter' component={ChildCounter}/>
        <Stack.Screen name='ImageGallery' component={ImageGallery}/>
        <Stack.Screen name='ImageList' component={ImageList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
