import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Componentes/Greeting';
import  UserDetails from './Componentes/UserDetails';
import  Task from './Componentes/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Steven"/>
      <UserDetails nombre="Paola" edad="20" ocupacion="Estudiante"/>
      <Task />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
