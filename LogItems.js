import {View, Text, StyleSheet} from 'react-native'; 
import Colors from '../../constants/Colors';

function LogItems({rounds, guess}){
    return (
    <View style = {styles.itemList}>
        <Text style = {styles.itemText}>
            {rounds}
        </Text>
        <Text style = {styles.itemText}>
            { guess }
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    itemList : {
        borderRadius: 40,
        borderColor: 'gold', //Colors.primary700,
        borderWidth: 1, 
        padding : 12, 
        marginVertical: 8, 
        backgroundColor: 'gold', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '100%', 
        elevation: 4, 
        shadowColor: 'black ', 
        shadowOffset:{width:4 , height:8 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3, 
    }, 
    itemText: {
        fontSize: 25,
        fontWeight: 'bold', 
    },

})



export default LogItems; 
