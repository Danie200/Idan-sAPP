import { Text,View,StyleSheet } from 'react-native'
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import { SafeArea } from '../components/safearea'
import { Button } from 'react-native-paper'


export function TricepTimer ({navigation})  {
    return (
     
        <SafeArea>
            <View style={{paddingHorizontal:30,alignItems:"center"}}>
            <View style={{marginBottom:12}}>
                <Text style={{color:'blue',fontWeight:"bold",fontSize:20}}>
                    Rest</Text>
            </View>
                    <CountdownCircleTimer
            
                            rotation='clockwise'
                            isPlaying
                            duration={30}
                            size={100}
                            onComplete= {() => navigation.navigate('Pknee')}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                            updateInterval={1}>
                                {({ remainingTime }) => <Text>{remainingTime}</Text>}
                  </CountdownCircleTimer>

                  <View style={{marginTop:10}}>
                    <Button
                    buttonColor='purple'
                    textColor='yellow'
                    onPress={() =>navigation.navigate('Secwide')}>
                        SKIP
                    </Button>
                  </View>
  </View>
  </SafeArea>
  
  
)}


const style = StyleSheet.create ({

})