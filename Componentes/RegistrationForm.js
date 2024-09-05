import React, {useState} from "react";
import { View, Button,Text,TextInput } from "react-native";

const RegistrationForm = () =>{
    const[nameValue,setNameValue] = useState('');
    const[emailValue,setEmailValue] = useState('');
    const[passValue,setPassValue] = useState('');
    const[savedName,setSavedName] = useState('');
    const[savedEmail,setSavedEmail] = useState('');
    const[savedPass,setSavedPass] = useState('');

    return(
        <View>
            <TextInput placeholder="Nombre"
            value={nameValue}
            onChangeText={text => setNameValue(text)}/>
            <TextInput placeholder="Correo Electrónico"
            value={emailValue}
            onChangeText={text => setEmailValue(text)}/>
            <TextInput placeholder="Contraseña"
            value={passValue}
            onChangeText={text => setPassValue(text)}/>
            <Button title="Registro" onPress={() =>setSavedName(nameValue)&setSavedEmail(emailValue)&setSavedPass(passValue)}/>
            <Text>1. Usuario Registrado</Text>
            <Text>User: {savedName}</Text>
            <Text>Email: {savedEmail}</Text>
            <Text>Password: {savedPass}</Text>
        </View>
    );
}
export default RegistrationForm;