import React, {useState} from "react";
import { View, Button,Text,TextInput } from "react-native";

const RegistrationForm = () =>{
    const[isVisible,setIsVisible] = useState(true);
    const[nameValue,setNameValue] = useState('');
    const[emailValue,setEmailValue] = useState('');
    const[passValue,setPassValue] = useState('');
    const[savedName,setSavedName] = useState('');
    const[savedEmail,setSavedEmail] = useState('');
    const[savedPass,setSavedPass] = useState('');

    return(
        <View>
            {isVisible &&<TextInput placeholder="Nombre"
            value={nameValue}
            onChangeText={text => setNameValue(text)}/>}
            {isVisible &&<TextInput placeholder="Correo Electrónico"
            value={emailValue}
            onChangeText={text => setEmailValue(text)}/>}
            {isVisible &&<TextInput secureTextEntry={true} 
            placeholder="Contraseña"
            value={passValue}
            onChangeText={text => setPassValue(text)}/>}
            {isVisible &&<Button title="Registro" onPress={() =>setSavedName(nameValue)&setSavedEmail(emailValue)&setSavedPass(passValue)&setIsVisible(!isVisible)}/>}
            <Text>1. Usuario Registrado</Text>
            <Text>User: {savedName}</Text>
            <Text>Email: {savedEmail}</Text>
            <Text>Password: {savedPass}</Text>
        </View>
    );
}
export default RegistrationForm;