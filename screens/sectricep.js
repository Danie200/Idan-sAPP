import { Text,View,StyleSheet,Image } from 'react-native'
import { SafeArea } from '../components/safearea'
import { Button } from 'react-native-paper'

export function SecTriceps ({navigation})  {
    return (
     
        <SafeArea>
            <View style={{paddingHorizontal:30,alignItems:"center",marginTop:50,}}>
                <Image
                style={{resizeMode:'cover',width: 550,
                height: 500,}}
                source={{uri:'https://fitnessprogramer.com/wp-content/uploads/2021/04/Triceps-Dips-on-Floor.gif'}}/>
                
           
                   <View>
                    <Text style={{color:'grey',fontWeight:'bold',fontSize:50}}>
                        x8
                    </Text>
                   </View>


                  <Button
                   buttonColor='purple'
                   textColor='yellow'
                   onPress={() =>navigation.navigate('Tsectricep')}> Next</Button>

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
                onPress={() =>navigation.navigate('Tsectricep')}>
                    SKIP
                </Button>
                </View>
            </View>
  </View>
  </SafeArea>
  
  
)}


const style = StyleSheet.create ({

})