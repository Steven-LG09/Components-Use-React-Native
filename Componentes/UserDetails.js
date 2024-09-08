import {Text} from 'react-native';


    const UserDetails = ({ nombre='Paola', edad=20, ocupacion='Estudiante' }) =>{
        return (
            <Text>2. Su nombre es {nombre}, tiene {edad} años y su ocupación es {ocupacion} </Text>
        );
    }
    export default UserDetails;
