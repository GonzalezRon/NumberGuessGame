import { View, StyleSheet, Alert,Text, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import {Ionicons} from '@expo/vector-icons';


import NumberContainer from '../components/gameFolder/NumberContainer'; 
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import Card from "../components/Card";
import LogItems from "../components/gameFolder/LogItems";





function randomGenerator(min, max, exclude){
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber == exclude){
        return randomGenerator(min, max, exclude);
    }else {
        return randomNumber; 
    }
}

let minBound = 1;
let maxBound = 100;

function GameScreen ({userNumber, onGameOver}) {

    const initialGuess= randomGenerator(1,100,userNumber);
    const [currentGuess, setCurrentGuess]=useState(initialGuess);
    const [guessRounds , setGuessRounds] = useState([initialGuess]);

    const {width , height } = useWindowDimensions(); 


    useEffect(()=> {
        if (currentGuess === userNumber){ 
            onGameOver(guessRounds.length); 
        }
    }, [currentGuess, userNumber, onGameOver]);
    //dependancies to control when to display 

    useEffect(()=>{
        minBound = 1; 
        maxBound = 100; 
    }, [] )

    function nextGuessHandler(direction){ //lower or greater 
        if ((direction === 'lower' && currentGuess < userNumber) || 
        (direction === 'greater' && currentGuess > userNumber )
        ){
            Alert.alert('Alert!', 'Invalid Entry', [{text: 'Try Again!', style: 'cancel'}]);
            return; 
        }
        if (direction == 'lower'){
            maxBound = currentGuess; 
        }else {
            minBound = currentGuess + 1;
        }
        const newRandomNumber = randomGenerator(minBound, maxBound, currentGuess); 
        setCurrentGuess(newRandomNumber);

        setGuessRounds((prevGuessRounds)=> [newRandomNumber, ...prevGuessRounds] ); 
    }


    /*
    /
    /Bind() method pre-configures the perameter value that will
    /be used in a future function execution 
    /this. doesnt matter in react native no class, second param: matters 
    */

    const guessRoundsListLength = guessRounds.length; 

    //default container with fragment tags <></>
    // root sibling components need fragment tags 
    let content = (
        <>
        <NumberContainer>{currentGuess}</NumberContainer>

        <Card>
          <InstructionText>Higher or Lower </InstructionText>
              <View style = {styles.buttonsContainer}> 
      
                  <View style = {styles.buttonContainer}>
                      <PrimaryButton onPressed={nextGuessHandler.bind(this, 'higher')}>
                           <Ionicons name='md-add' size={30} color='white'/> 
                      </PrimaryButton>
                  </View>
      
                  <View style = {styles.buttonContainer}> 
                      <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower')}>
                          <Ionicons name="md-remove" size={30} color='white'/> 
                      </PrimaryButton>
                  </View>
      
              </View>
        </Card>
        </>
    )

    if (width > 500 ){
        content = (
            <>
            <View style = {styles.buttonsContainerWide}>
            <View style = {styles.buttonContainer}>
                      <PrimaryButton onPressed={nextGuessHandler.bind(this, 'higher')}>
                           <Ionicons name='md-add' size={30} color='white'/> 
                      </PrimaryButton>
                  </View>
                   
                 <NumberContainer> {currentGuess} </NumberContainer>

                 <View style = {styles.buttonContainer}> 
                      <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower')}>
                          <Ionicons name="md-remove" size={30} color='white'/> 
                      </PrimaryButton>
                  </View>
            </View> 
            
            </>
        )
    }

    return(
 <View style = {styles.screen}>
        {/*<Title>Computer's Guess</Title>*/}
        {content}
        <View style = {styles.listContainer}>
           {/*{guessRounds.map(guessRound => <Text key= {guessRound}>{guessRound}</Text>)}*/}
           <FlatList 
           data= {guessRounds}

           renderItem= { (itemData) => 
           <LogItems 
            rounds= {guessRoundsListLength -itemData.index}
            guess={itemData.item}/>
            } 

           keyExtractor = {(item)=> item}>

           </FlatList>
        </View>
</View>
);

} 


const styles = StyleSheet.create({
    screen : {
        flex: 1, 
        padding : 25, 
        alignItems: 'center',

    }, 
    buttonsContainerWide: {
        paddingTop: 35, 
        flexDirection: 'row', 
        alignItems: 'center',

    }, 

    buttonsContainer: {

        flexDirection: 'row',
        padding: 25,
        
    }, 
    buttonContainer:{
        flex: 1, 
        
    }, 
    listContainer :{
        flex: 1, 
        padding: 22, 

    }

})

export default GameScreen; 