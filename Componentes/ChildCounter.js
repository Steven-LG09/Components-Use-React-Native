import { View,Text,Button } from "react-native";
import React, {useState} from "react";

const ChildCounter = ({route}) =>{
    const {count = "."} = route.params || {};
    const[count1,setCount1] = useState(count);
    return(
        <View>
            <Text>Contador en : {count1}</Text>
            <Button title="Incrementar" onPress={()=>setCount1(count1+1)}/>
        </View>
    );
}
export default ChildCounter;