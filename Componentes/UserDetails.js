import {Text} from 'react-native';


    const userDetails = ({ nombre, edad, ocupacion }) =>{
        return (
            <Text>2. Su nombre es {nombre}, tiene {edad} años y su ocupación es {ocupacion} </Text>
        );
    }
    export default userDetails;
