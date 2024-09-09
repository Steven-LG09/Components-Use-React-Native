import React, {useState} from "react";
import { View,Button,StyleSheet } from "react-native";

const ThemeSwicher = ({navigation}) =>{
    const [theme,setTheme] = useState('darkblue')
    const toggleTheme = () =>{
        const newColor = theme === 'darkblue' ? 'lightblue' : 'darkblue';
        setTheme(newColor);
    }
    return(
        <View style={[styles.container, { backgroundColor: theme }]}>
            <Button title="Cambiar tema" onPress={toggleTheme}/>
        </View>
    );
}

export default ThemeSwicher;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });