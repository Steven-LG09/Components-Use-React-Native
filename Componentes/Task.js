import {Text} from 'react-native';


    let Task = ({ title="Movil", completed= "completado" }) =>{
        return (
            <Text>3. Tarea "{title}" Estado: {completed} </Text>
        );
    }
    export default Task;