
import { View, Text, StyleSheet,Dimensions } from "react-native";
import Colors from "../../constants/Colors";



function NumberComponent({children}){ 
    return (

        <View style = {styles.container}>
            <Text style = {styles.numberText}>{children}</Text>
        </View>
    ); 
}
//screen = with tool bar 
//window is without screen 
const deviceWidth = Dimensions.get('window').width; 

const styles = StyleSheet.create({
    container : {
        borderWidth: 4, 
        padding: deviceWidth < 380 ? 12 : 24, 
        borderColor: Colors.primary700, 
        borderRadius: 8, 
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        flexDirection: "column",
    }, 
    numberText : {
        color: Colors.primary700 , 
        fontSize: 36,
        //fontFamily: 'open-sans-bold',
        fontWeight: "bold", 
    },
    
})



export default NumberComponent; 