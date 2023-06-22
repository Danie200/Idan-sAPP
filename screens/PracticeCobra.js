import { Text,View,StyleSheet,Image } from 'react-native'
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import { SafeArea } from '../components/safearea'
import { Button } from 'react-native-paper'

export function PracticeCobra ({navigation})  {
    return (
     
        <SafeArea>
            <View style={{paddingHorizontal:30,alignItems:"center",marginTop:50,}}>
                <Image
                style={{resizeMode:'cover',width: 550,
                height: 500,}}
                source={{uri:'https://pbs.twimg.com/ext_tw_video_thumb/1617175471992758275/pu/img/872-eFZ4kARkVcwo?format=jpg&name=large'}}/>
                
           
                    <CountdownCircleTimer
            
                            rotation='clockwise'
                            isPlaying
                            duration={30}
                            size={140}
                            onComplete= {() => ({shouldRepeat:navigation.navigate('Tcobra'), delay:1})}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                            updateInterval={1}>
                                {({ remainingTime }) => <Text>{remainingTime}</Text>}
                  </CountdownCircleTimer>


                  <Button
                   buttonColor='purple'
                   textColor='yellow'> Next</Button>

            <View style={{flexDirection:'row',gap:14}}>
                <View >
                <Button
                buttonColor='purple'
                textColor='yellow'
                onPress={() => navigation.navigate('Bchest')}>
                    QUIT
                </Button>
                </View>

                <View>
                <Button
                buttonColor='purple'
                textColor='yellow'>
                    SKIP
                </Button>
                </View>
            </View>
  </View>
  </SafeArea>
  
  
)}


const style = StyleSheet.create ({

})