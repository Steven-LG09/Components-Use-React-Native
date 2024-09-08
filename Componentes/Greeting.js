import React from 'react';
import { View, Text} from 'react-native';


    const Greeting = ({ name ='Steven' }) =>{
        return (
            <View>
                <Text>1. Hola {name}!</Text>
            </View>
        );
    }
    export default Greeting;

