import { View,Button,Alert } from "react-native";

const AlertButton= ({route})=>{
    const {alertText = '.'} = route.params || {};
    const showAlert = () => {
        Alert.alert(
          'Cuidado!!',
          alertText,
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false } 
        );
      };
      return(
        <View>
            <Button title="Alerta" onPress={showAlert}/>
        </View>
      );
}
export default AlertButton;