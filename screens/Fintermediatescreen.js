import React from 'react';
import { SafeArea } from "../components/safearea";
import { View,Text,StyleSheet,FlatList,ImageBackground,TouchableOpacity} from "react-native";
import { useState,useEffect,useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
;


const Tab = createBottomTabNavigator();
 export function Fintermediatescreen ({navigation}) {
  const image = {uri: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600'};
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
    return(
      <ImageBackground source={image} resizeMode='cover'
      style={styles.image}>
        <SafeArea >
          <View>
            <Text style={{color:'yellow',fontSize:30,fontWeight:'bold'}}>
              Select Purpose
            </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Fintermediatefullbody')}>
        <View style={styles.beginnerbox}>
          <View style={styles.beginner}>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Full Body
              </Text>
              </View>
        </View>
 </TouchableOpacity>
 
 <TouchableOpacity onPress={() => navigation.navigate('Fintermediateabs')}>
        <View style={styles.intermediatebox}>
          <View style={styles.intermediate}>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Abs
              </Text>
              </View>
              </View>
  </TouchableOpacity> 
  </View>

        <View style={{flexDirection:'row',marginTop:10,justifyContent:'center'}}>
 <TouchableOpacity onPress={() => navigation.navigate('Fintermediateloseweight')}>
        <View style={styles.advancedbox}>
          <View style={styles.advanced}>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Lose Weight
              </Text>
              </View>
        </View>
</TouchableOpacity>

 <TouchableOpacity onPress={() => navigation.navigate('Fintermediatestaytoned')} >
        <View style={styles.advancedbox}>
          <View style={styles.advanced}>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Stay Toned
              </Text>
              </View>
        </View>
</TouchableOpacity>
</View>    
        </SafeArea>
        </ImageBackground>
    )
}

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
      marginLeft:10,
    },
    advancedbox:{
      width:160,
      height:100,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#77037B',
      borderRadius:10,
      marginLeft:10,
    },
    beginner:{
      flexDirection:'row',
      alignItems:'center'
    },
    intermediate:{
      flexDirection:'row',
      alignItems:'center'
    },
    advanced:{
      flexDirection:'row',
      alignItems:'center'
    },
    image: {
      flex: 1,
      justifyContent: 'center',}
})