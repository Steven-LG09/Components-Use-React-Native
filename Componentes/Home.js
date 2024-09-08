import { View,Text,StyleSheet,Button} from "react-native";


export default function HomeScreen({navigation, route}){
  const {ahua} = route.params;
    return(
      <View style={styles.container}>
        <Text style={styles.text}>1. Paso de Parametros a Componentes</Text>
        <Button title="Greeting.js" onPress={()=> navigation.navigate("Greeting")}/>
        <Button title="UserDetails.js" onPress={()=> navigation.navigate("UserDetails")}/>
        <Button title="Task.js" onPress={()=> navigation.navigate("Task")}/>
        <Text style={styles.text}>2. Uso de useState</Text>
        <Button title="ToggleText.js" onPress={()=> navigation.navigate("ToggleText")}/>
        <Button title="DynamicForm.s" onPress={()=> navigation.navigate("DynamicForm")}/>
        <Button title="ClickCounter.js" onPress={()=> navigation.navigate("ClickCounter")}/>
        <Text style={styles.text}>3. Eventos con Botones</Text>
        <Button title="RegistrationForm.js" onPress={()=> navigation.navigate("RegistrationForm")}/>
        <Text>{ahua}</Text> 
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: 20,
      marginRight: 20,
    },
    text: {
      fontSize: 15,
      color: 'red',
      fontStyle: 'italic'
    },
  });