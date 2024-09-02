import React, {useState} from "react";
import { View,Text,Button } from "react-native";


const Toggletext = () =>{

    const [isVisible, setIsVisible] = useState(false);

    return(
        <View>
            {isVisible && <Text>1. Desarrollo Visible</Text>}
            <Button title="Mostrar Texto" onPress={() => setIsVisible(!isVisible)}/>
        </View>
    );
}

export default Toggletext;