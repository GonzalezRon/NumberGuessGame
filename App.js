import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading'; //depreciated 

import {StyleSheet,  
  ImageBackground, 
  SafeAreaView} from 'react-native';


import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';


export default function App() {

  //names and values for props 
  // const [isFontLoaded] = useFonts({
  //   'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  //   'open-sans-regular' : require('./assets/fonts/OpenSans-Regular.ttf'), 
  // })
        //techical issues loading font, async required
  // if (!isFontLoaded){
  //   return  <AppLoading/>
  //}

  const [userNumber, setUserNumber ]=useState();
  const [gameOver, setGameState] = useState(true);  
  const [guessRounds, setGuessRounds] = useState(0);

  /*pickedNumberHandler is addressed with onPickedNumber 
  * StartGameScreen props onPickedNumber {Object Destructuring}
  *  in the confirmInputHandler funct. 
  * onPickedNumberCollects pickednumber prop 
  * *pickedNumber is passed too handler and setUserNumber takes PickedNumber
  */
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber); 
    setGameState(false); 
  }

  function gameOverHandler(rounds){
    setGameState(true); 
    setGuessRounds(rounds);
  }

  function newGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/> ; 

  if (userNumber){
    screen = <GameScreen 
      userNumber={userNumber} 
      onGameOver={gameOverHandler}/>; 
  }

  //@param gameOver and userNumber are both state
  if (gameOver && userNumber){
    screen = <GameOverScreen 
      rounds={guessRounds} 
      userNumber={userNumber}
      onStartNewGame={newGameHandler} />
  }

  



  return (
    <>
    <StatusBar style ="light"/> 
    <LinearGradient 
        colors= {['purple',Colors.primary500,Colors.primary700,]}
        style = {styles.screensContainer}> 
        <ImageBackground 
        resizeMode='cover'
        style={styles.screensContainer}
        imageStyle={styles.backgroundImage}
        source={require('./images/neon.jpg')}>
        <SafeAreaView style = {styles.screensContainer}>
          {screen}
        </SafeAreaView>  
        
        </ImageBackground>
    </LinearGradient> 
    </>
  );
}

const styles = StyleSheet.create({
      screensContainer : {
        flex : 1,  
      },
      backgroundImage: {
        opacity: 0.557,
      }
    
});
