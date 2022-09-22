import {View, Text, Pressable, StyleSheet} from 'react-native'; 
import Colors from '../constants/Colors';


function PrimaryButton({children, onPressed}) {

    return (
        <View style={styles.buttonOutContainer}>
            <Pressable 
                style={({pressed})=> 
                pressed ? [styles.buttonInnerContainer, styles.pressed] :styles.buttonInnerContainer } 
                onPress={onPressed} 
                android_ripple={{color: '#64033'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View> 
    )
}


const styles = StyleSheet.create({
    buttonOutContainer : {
        borderRadius: 28,
        margin: 3,
        overflow: 'hidden',

    }, 

    buttonInnerContainer: {
        backgroundColor: Colors.primary600, //Colors.primary500, 
        paddingVertical: 8, 
        paddingHorizontal: 16,
        elevation: 5, //check primaryButton for shadow Styling
    },
    buttonText :{ 
        color: "white",
        textAlign: 'center', 

    },
    
    pressed: { 
        opacity: 0.75,
    }
})

export default PrimaryButton; 

