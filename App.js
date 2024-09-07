import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
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
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Registration' component={RegistrationForm}/>
      </Stack.Navigator>
    </NavigationContainer>
    /**<View style={styles.container}>
      <Text style={styles.text}>1. Paso de Parámetros a Componentes</Text>
      <Greeting name="Steven"/>
      <UserDetails nombre="Paola" edad="20" ocupacion="Estudiante"/>
      <Task />
      <Text style={styles.text}>2. Uso de useState</Text>
      <Toggletext />
      <DynamicForm />
      <ClickCounter />
      <Text style={styles.text}>3. Eventos con botones</Text>
      <RegistrationForm />
      <ThemeSwitcher />   
      <StatusBar style="auto" />
    </View>**/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
    fontStyle: 'italic'
  },
});
