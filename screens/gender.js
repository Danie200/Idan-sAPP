import { useState,useEffect,useCallback } from "react";
import React from "react";
import { View,Text,StyleSheet,ImageBackground,TouchableOpacity} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { SafeArea } from "../components/safearea";




 export function Gender ({navigation}) {
  const image = {uri: 'https://media.istockphoto.com/id/486662770/photo/friends-in-fitness.jpg?s=612x612&w=0&k=20&c=diU0UHIy0QCzH3-NoSX_fcZfinhTJCg-BMrV5OhjJmU='};
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({Inter_500Medium});
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
   return  null;
  }


 
    return (
      <ImageBackground source={image} resizeMode='cover'
      style={styles.image}>
  <SafeArea >
      
    <View>
      <Text style={{color:"yellow",fontSize:30,fontWeight:'bold'}}>
        Select Gender
      </Text>
    </View>
     <View >
        <View>
          <View style={styles.up}>
          <TouchableOpacity onPress={() => navigation.navigate('Mainscreen2')}>
            <View style={styles.beginnerbox}>
              <View style={styles.beginner}>
                  <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                    Male
                  </Text>
                  </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => navigation.navigate('Femalescreen2')}>
              <View style={styles.intermediatebox}>
              <View style={styles.intermediate}>
             
                  <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                    Female
                  </Text>
                  </View>
                  </View>
            </TouchableOpacity> 
            </View>
         </View>        
</View> 
</SafeArea>   
</ImageBackground>
     )};

const styles = StyleSheet.create({
 
  beginnerbox:{
    width:160,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#77037B',
    borderRadius:10,
    marginLeft:10,
    
  },
  intermediatebox:{
    width:160,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#77037B',
    borderRadius:10,
    marginRight:50,
   
  },
 
  beginner:{
    flexDirection:'row',
    alignItems:'center'
  },
  intermediate:{
    flexDirection:'row',
    alignItems:'center'
  },
  up:{
    flexDirection:'row',
    alignContent:'center',
    gap:20,
  },
  down:{
    alignItems:'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',}
});
