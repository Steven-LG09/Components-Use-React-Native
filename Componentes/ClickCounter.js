import React, {useState} from "react";
import { View,Button,Text } from "react-native";

const ClickCounter = () =>{
    const[count,setCount] =useState(0);

    return(
        <View>
            <Button title="Clicks" onPress={() =>setCount(count+1)}/>
            <Text>3. {count}</Text>        
        </View>
    );
}
export default ClickCounter;