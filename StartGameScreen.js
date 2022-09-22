import { TextInput, View, 
    StyleSheet, Alert, Dimensions,
     useWindowDimensions, 
     KeyboardAvoidingView, ScrollView} from 'react-native'; 
// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors'; 
import Title from '../components/Title';
 /*Title here must not have the platform example seen in title.js */ 
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';


function StartGameScreen({onPickedNumber}){

    const [enteredNumber, setEnteredNumber]= useState('');

    const { width, height } = useWindowDimensions(); 
    //the function above <<WATCHES>> the phones Dimensions
    //code here in the component function
    // the code is re-read such as effects and state change
    //size changes or orientation this file section gets ran multiple times 

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText); 
    }


    function resetInputHandler(){
        setEnteredNumber(''); 

    }

    //check propper input 
    function confirmInputHandler() {

        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) { 
            Alert.alert('Number Input Error',
            'This number doesnt work with our parameters',
            [{text: 'okay', style: 'destructive', onPress: resetInputHandler}]
            );
            
            return; 
        }
            onPickedNumber(chosenNumber); 
       

    }

    const marginTopDistance = height < 380 ? 30 : 100;
    //befor JSX component function // merging dynamically to styles 

return (
    <ScrollView style = {styles.screen}>
    <KeyboardAvoidingView
    behavior='position' 
    style = {styles.screen}>
        <View style = {[styles.rootContainer, {marginTop: marginTopDistance }]}>  
        <Title> Guess The Number </Title>

        <Card>
            
            <InstructionText> Enter a number </InstructionText>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}/>

            <View style = {styles.buttonsContainer}>

                <View style = {styles.bottonContainer}>
                    <PrimaryButton 
                    onPressed={resetInputHandler}>Reset</PrimaryButton>
                </View>

                <View style = {styles.bottonContainer}>
                    <PrimaryButton 
                    onPressed={confirmInputHandler}>Confirm</PrimaryButton>
                </View>

            </View>
        </Card>
    </View>  
    </KeyboardAvoidingView>
    </ScrollView>
    )

}
//notice nesting of element views for container, the button didnt have to be edited too much
//rather add views so buttons can take up available space with flex;1, 
//elevation is Android specific property

//const deviceHeight = Dimensions.get('window').height;
//this is helpful when the device is in landscape mode
//switching orientation during the game this part is not read again,

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }, 

    rootContainer : { 
        flex: 1, 
        //marginTop: //deviceHeight < 400 ? 30: 100, 
        alignItems: 'center',
    }, 

    numberInput: {
        height: 50, 
        fontSize: 48, 
        width: 60,
        textAlign: 'center',
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        color: Colors.primary700,
        marginVertical: 8,
        fontWeight: 'bold',
    }, 
    buttonsContainer: {
        flexDirection: 'row',

    },
    bottonContainer: {
        flex: 1,
    }

})

export default StartGameScreen; 

