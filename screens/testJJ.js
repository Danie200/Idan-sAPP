import { Text,View,StyleSheet,Image } from 'react-native'
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import { SafeArea } from '../components/safearea'
import { Button } from 'react-native-paper'

export function Jj ({navigation})  {
    return (
     
        <SafeArea>
            <View style={{paddingHorizontal:30,alignItems:"center",marginTop:100}}>
               
           
                    <CountdownCircleTimer
                            rotation='clockwise'
                            isPlaying
                            duration={10}
                            size={100}
                            onComplete= {() =>  navigation.navigate('Pjumpjack')}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                            updateInterval={1}>
                                {({ remainingTime }) => <Text>{remainingTime}</Text>}
                  </CountdownCircleTimer>

                  <View style={{marginTop:10}}>
                  <Button
                   buttonColor='purple'
                   textColor='yellow'
                  onPress={() => navigation.navigate('Pjumpjack')}>
                    Skip
                  </Button>
                  </View>
  </View>
  </SafeArea>
  
  
)}


const style = StyleSheet.create ({

})