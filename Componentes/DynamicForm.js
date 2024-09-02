import React, {useState} from "react";
import { View, Text, Button, TextInput } from "react-native";

const dynamicForm = () =>{
    const[isVisible,setIsVisible] = useState(false);
    const[inputValue, setInputValue] = useState('');

    return(
        <View>
            <TextInput value={inputValue}
            onChangeText={text => setInputValue(text)}
            placeholder="Escriba aqui" />
            <Button title="Listo" onPress={() => setIsVisible(!isVisible)}/>
            {isVisible && <Text>Usted escribió: {inputValue}</Text>}
        </View>
    );
}

export default dynamicForm;