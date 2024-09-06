import React, {useState} from "react";
import { View,Button,StyleSheet } from "react-native";

const themeSwicher = () =>{
    const [theme,setTheme] = useState('lightblue')
    const toggleTheme = () =>{
        const newColor = theme === 'lightblue' ? 'white' : 'lightblue';
        setTheme(newColor);
    }
    return(
        <View style={[styles.container, { backgroundColor: theme }]}>
            <Button title="Cambiar tema" onPress={toggleTheme}/>
        </View>
    );
}

export default themeSwicher;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });