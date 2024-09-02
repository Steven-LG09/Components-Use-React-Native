import React, {useState} from "react";
import { View,Button } from "react-native";

const themeSwicher = () =>{
    const [theme,setTheme] = useState('light')
    const toggleTheme = () =>{
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }
    return(
        <View>
            <Button title="Cambiar tema" onPress={toggleTheme}/>
        </View>
    );
}

export default themeSwicher;