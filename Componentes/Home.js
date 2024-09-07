import { View,Text,StyleSheet,Button} from "react-native";

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title="Go to RF" onPress={()=> navigation.navigate("Registration")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      color: 'red',
      fontStyle: 'italic'
    },
  });