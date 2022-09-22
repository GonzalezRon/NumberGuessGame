
import {Text, StyleSheet, Platform} from 'react-native'; 


function Title({children}){
    return (
        <Text style = {styles.title}>{children}</Text>
    )

}

const styles = StyleSheet.create({
    title : {
        //fontFamily: 'open-sans-bold', 
        fontWeight:'bold', 
        fontSize: 24, 
        color: 'white',
        textAlign: 'center',
        //borderWidth:Platform.OS === 'ios' ? 2 : 0,
        borderWidth: Platform.select({ios: 0 , android: 2 }),
        borderColor: 'white',  
        maxWidth: '80%', 
        minWidth: 300,
        
    },
})

export default Title;

/*more about Platform,Select({ios:, android})
platform API usage can be omitted when renaming file.js to file.'platformOS'.js 
example: title.android.js is read only by android. 
Themes, colors, titles, etc can be selected for platform specific 
*/