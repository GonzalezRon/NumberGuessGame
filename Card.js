import { StyleSheet,View} from "react-native";
import Colors from "../constants/Colors";

function Card({children}){
    return (
        <View style={styles.Card}>
            {children}
        </View>
    )
}



const styles = StyleSheet.create({

    Card : { 
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24, 
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary500,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 10 },
        shadowRadius: 7,
        shadowOpacity: 0.8,
    }, 

})

export default Card;

