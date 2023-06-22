import { Text,View,StyleSheet,Image } from 'react-native'
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import { SafeArea } from '../components/safearea'
import { Button } from 'react-native-paper'

export function PracticeChest ({navigation})  {
    return (
     
        <SafeArea>
            <View style={{paddingHorizontal:30,alignItems:"center",marginTop:50,}}>
                <Image
                style={{resizeMode:'cover',width: 550,
                height: 500,}}
                source={{uri:'https://fitnessprogramer.com/wp-content/uploads/2022/11/Reverse-Chest-Stretch.gif'}}/>
                
           
                    <CountdownCircleTimer
            
                            rotation='clockwise'
                            isPlaying
                            duration={30}
                            size={140}
                            onComplete= {() => ({shouldRepeat:true, delay:1})}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                            updateInterval={1}>
                                {({ remainingTime }) => <Text>{remainingTime}</Text>}
                  </CountdownCircleTimer>


                  

            <View style={{flexDirection:'row',gap:14}}>
                <View >
                <Button
                buttonColor='purple'
                textColor='yellow'
                onPress={() => navigation.navigate('Bchest')}>
                    Finish
                </Button>
                </View>
            </View>
  </View>
  </SafeArea>
  
  
)}


const style = StyleSheet.create ({

})