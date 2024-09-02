import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Componentes/Greeting';
import  UserDetails from './Componentes/UserDetails';
import  Task from './Componentes/Task';
import  Toggletext from './Componentes/ToggleText';
import  DynamicForm from './Componentes/DynamicForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1. Paso de Parámetros a Componentes</Text>
      <Greeting name="Steven"/>
      <UserDetails nombre="Paola" edad="20" ocupacion="Estudiante"/>
      <Task />
      <Text style={styles.text}>2. Uso de useState</Text>
      <Toggletext />
      <DynamicForm />
      <StatusBar style="auto" />
    </View>
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
