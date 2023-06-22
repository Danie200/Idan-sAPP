import { Text,View,StyleSheet,Image } from 'react-native'
import { SafeArea } from '../components/safearea'
import { Button } from 'react-native-paper'

export function Secwide ({navigation})  {
    return (
     
        <SafeArea>
            <View style={{paddingHorizontal:30,alignItems:"center",marginTop:50,}}>
                <Image
                style={{resizeMode:'cover',width: 550,
                height: 500,}}
                source={{uri:'https://th.bing.com/th/id/R.a17cd9d7eb4614f87233a504fcd63ed9?rik=DmphATJbJY0IlQ&pid=ImgRaw&r=0'}}/>
                
           
                   <View>
                    <Text style={{fontWeight:'bold',fontSize:50,color:'grey'}}>
                        X6
                    </Text>
                   </View>

                  <Button
                   buttonColor='purple'
                   textColor='yellow'
                   onPress={() =>navigation.navigate('Tsecwide')}> Next</Button>

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
                onPress={() =>navigation.navigate('Tsecwide')}>
                    SKIP
                </Button>
                </View>
            </View>
  </View>
  </SafeArea>
  
  
)}


const style = StyleSheet.create ({

})