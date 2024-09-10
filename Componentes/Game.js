import { View, Text,Button } from "react-native";
import React, {useState} from "react";

const Game = ({navigation}) =>{
    const[estado] = useState("correctAnswer")
    return(
        <View>
            <Text>Estado actual: {estado}</Text>
            <Button title="Pasar estado" onPress={()=>navigation.navigate("GuessForm",{estado})}/>
        </View>
    );
}
export default Game;