import React, {useState} from "react";
import { View, Button,Text,TextInput ,StyleSheet} from "react-native";

const RegistrationForm = ({navigation}) =>{
    const[nameValue,setNameValue] = useState('');
    const[emailValue,setEmailValue] = useState('');
    const[passValue,setPassValue] = useState('');

    return(
        <View style={styles.container}>
            <TextInput placeholder="Nombre"
            value={nameValue}
            onChangeText={text => setNameValue(text)}/>
            <TextInput placeholder="Correo Electrónico"
            value={emailValue}
            onChangeText={text => setEmailValue(text)}/>
            <TextInput secureTextEntry={true} 
            placeholder="Contraseña"
            value={passValue}
            onChangeText={text => setPassValue(text)}/>
            <Button title="Registro" onPress={() => navigation.navigate("Home",{nameValue,emailValue,passValue})}/>
        </View>
    );
}
export default RegistrationForm;

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