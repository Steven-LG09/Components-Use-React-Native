import { View,TextInput,Text,Button } from "react-native";
import React, {useState} from "react";

const GuessForm = ({route})=>{
    const {estado} = route.params;
    const[texto,setTexto] = useState("")
    const [isVisible, setIsVisible] = useState(false);
    return(
        <View>
            <TextInput
            placeholder="Adivine"
            value={texto}
            onChangeText={text =>setTexto(text)}
            />
            {isVisible && <Text>Correcto</Text>}
            <Button title="Enviar" onPress={() => setIsVisible(!isVisible)}/>
        </View>
    );
}
export default GuessForm;