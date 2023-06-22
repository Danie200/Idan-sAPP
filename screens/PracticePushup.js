import { Text,View,StyleSheet,Image } from 'react-native'
import { SafeArea } from '../components/safearea'
import { Button } from 'react-native-paper'

export function PracticePushup ({navigation})  {
    return (
     
        <SafeArea>
            <View style={{paddingHorizontal:30,alignItems:"center",marginTop:50,}}>
                <Image
                style={{resizeMode:'cover',width: 550,
                height: 500,}}
                source={{uri:'https://www.bing.com/th/id/OGC.a17cd9d7eb4614f87233a504fcd63ed9?pid=1.7&rurl=https%3a%2f%2fhomeworkouts.org%2fwp-content%2fuploads%2fanim-push-ups.gif&ehk=NRlTQ3pqVRGoI4NwHMwiybFxwvdkDR%2ftOAb9Ne%2fUW%2fo%3d'}}/>
                
           
                    <View>
                        <Text style={{color:'grey',fontWeight:'bold',fontSize:50}}>
                            x8
                        </Text>
                    </View>


                  <Button
                   buttonColor='purple'
                   textColor='yellow'
                   onPress={() => navigation.navigate('Tpushup')}> Next</Button>

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
                textColor='yellow'
                onPress={() => navigation.navigate('Tpushup')}>
                    SKIP
                </Button>
                </View>
            </View>
  </View>
  </SafeArea>
  
  
)}


const style = StyleSheet.create ({

})