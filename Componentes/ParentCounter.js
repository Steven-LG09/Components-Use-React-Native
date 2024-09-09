import React, {useState} from "react";
import { View,Text,Button} from "react-native";

const ParentCounter = ({navigation}) =>{
    const[count] = useState(5);

    return(
        <View>
            <Text>Contador en : {count}</Text>
            <Button title="ChildCounter.js" onPress={()=> navigation.navigate("ChildCounter",{count})}/>
        </View>
    );
}
export default ParentCounter;