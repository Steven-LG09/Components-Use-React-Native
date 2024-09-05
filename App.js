import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Greeting from './Componentes/Greeting';
import  UserDetails from './Componentes/UserDetails';
import  Task from './Componentes/Task';
import  Toggletext from './Componentes/ToggleText';
import  DynamicForm from './Componentes/DynamicForm';
import  ClickCounter from './Componentes/ClickCounter';
import  RegistrationForm from './Componentes/RegistrationForm';
import ThemeSwitcher from './Componentes/ThemeSwitcher';
import Topper from './Componentes/Topper';

const Stack = createStackNavigator();

export default function App({}) {
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
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Topper} />
          <Stack.Screen name="Details" component={RegistrationForm} />
        </Stack.Navigator>
      </NavigationContainer>
      <Topper/>
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
