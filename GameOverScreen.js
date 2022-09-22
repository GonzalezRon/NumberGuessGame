import { View, 
    Text, 
    StyleSheet,
    Image,
    useWindowDimensions,
    ScrollView} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/Colors";

function GameOverScreen ({rounds, userNumber, onStartNewGame}){

    const {width, height } = useWindowDimensions(); 

    let imageSize = 300; 

    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400){
        imageSize = 80; 
    }

    const imageStyle = {
        width: imageSize, 
        height: imageSize, 
        borderRadius: imageSize/2, 
    }



    return(

        <ScrollView style = {styles.screenScroller}>
            <View style = {styles.rootContainer}> 
            <Title> GAME OVER! </Title>
            <View style = {[styles.imageContainer, imageStyle]}> 
            <Image 
            source={require('../images/success.png')} 
            style = {styles.image}/> 
            </View>
            <Text style ={styles.summaryText}>
                Computer Guesses: <Text style = {styles.highlight}>{rounds}</Text>, 
                for your number: <Text style = {styles.highlight}>{userNumber}</Text> 
            </Text>
            <PrimaryButton onPressed={onStartNewGame} >New Game </PrimaryButton> 
        </View>
        </ScrollView>
    )
} 

//const deviceWidth = Dimensions.get('window').width; 


const styles = StyleSheet.create({
    screenScroller: {
        flex: 1, 
    }, 
    rootContainer : { 
        flex: 1, 
        padding: 24, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer : { 
        // borderRadius: deviceWidth < 380 ? 75 : 150, 
        // width: deviceWidth < 380 ? 150 : 300, 
        // height: deviceWidth < 380 ? 150 : 300, 
        borderWidth: 3, 
        borderColor: Colors.primary600, 
        overflow: 'hidden',
        margin: 36, 

    }, 
        summaryText: { 
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center', 
            marginBottom: 25,
            

        },
        highlight: { 
            fontSize: 25, 
            color: 'gold', 
        },

        image : {
            width: '100%',
            height: '100%',
        }
})

export default GameOverScreen; 