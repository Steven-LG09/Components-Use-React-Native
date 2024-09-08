import React, {useState} from "react";
import { View, Text, Button, TextInput } from "react-native";

const DynamicForm = () =>{
    const[inputValue, setInputValue] = useState('');
    const [savedText, setSavedText] = useState('');

    return(
        <View>
            <TextInput placeholder="Escriba aqui"
            value={inputValue}
            onChangeText={text => setInputValue(text)}/>
            <Button title="Listo" onPress={() => setSavedText(inputValue)}/>
            <Text>2. Usted escribió: {savedText}</Text>
        </View>
    );
}

export default DynamicForm;