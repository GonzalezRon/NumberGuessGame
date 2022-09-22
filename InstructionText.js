
import {Text, StyleSheet} from 'react-native'; 
import Colors from '../constants/Colors';


//style is a custome component i can use to overide my default
function InstructionText({children, style}){
    return (
        <Text style = {[styles.instructionsText, style]}> {children} </Text>
    )
}

const styles = StyleSheet.create({

    instructionsText: {
        color: Colors.primary700, 
        fontSize: 24,
        //fontFamily: 'open-sans-bold'
    }, 

})

export default InstructionText;