import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';
import React, {useState} from 'react';
import Greeting from './Componentes/Greeting';
import  UserDetails from './Componentes/UserDetails';
import  Task from './Componentes/Task';
import  Toggletext from './Componentes/ToggleText';
import  DynamicForm from './Componentes/DynamicForm';
import  ClickCounter from './Componentes/ClickCounter';
import  RegistrationForm from './Componentes/RegistrationForm';
import ThemeSwitcher from './Componentes/ThemeSwitcher';
import greeting from './Componentes/Greeting';


const HomeScreen = ({ onNavigate }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Example" onPress={onNavigate} />
    </View>
  );
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const handleNavigate = () => {
    setCurrentScreen('Greeting');
  };
  return (
    <View style={styles.container}>
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
      {currentScreen === 'Home' ? (
        <HomeScreen onNavigate={handleNavigate} />
      ) : (
        <Greeting name="Steven"/>
      )}      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleSheet === 'light' ? 'black' : 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
    fontStyle: 'italic'
  },
});
