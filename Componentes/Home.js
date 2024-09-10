import { ScrollView,Text,StyleSheet,Button,TextInput} from "react-native";
import React, {useState} from "react";


export default function HomeScreen({route, navigation}){
    const {nameValue = '.',emailValue = '.',passValue = '.'} = route.params || {};
    const [alertText,setAlertText] = useState('')

    return(
      <ScrollView style={styles.container}>
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
        <Text>Usuario Registrado</Text>
        <Text>Nombre:{nameValue}</Text> 
        <Text>Email:{emailValue}</Text> 
        <Text>Comtraseña:{passValue}</Text> 
        <Button title="ThemeSwitcher.js" onPress={()=> navigation.navigate("ThemeSwitcher")}/>
        <TextInput 
        placeholder="Texto de la Alerta"
        value={alertText}
        onChangeText={text => setAlertText(text)}
        />
        <Button title="AlertButton.js" onPress={()=> navigation.navigate("AlertButton",{alertText})}/>
        <Text style={styles.text}>4. Paso de parametros de Padre a Hijo</Text>
        <Button title="ParentCounter.js" onPress={()=> navigation.navigate("ParentCounter")}/>
        <Button title="ImageGallery.js" onPress={()=> navigation.navigate("ImageGallery")}/>
        <Button title="Game.js" onPress={()=> navigation.navigate("Game")}/>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignContent: 'center',
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