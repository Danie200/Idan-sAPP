import {faDumbbell} from "@fortawesome/free-solid-svg-icons" 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from 'react';
import { SafeArea } from "../components/safearea";
import { View,Text,StyleSheet,FlatList,Image,TouchableOpacity} from "react-native";
import { useState,useEffect,useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons  from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
 export function Beginnerscreen ({navigation}) {
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
        <SafeArea >
            <View style={styles.image}>
                <FontAwesomeIcon
                icon={faDumbbell} size={50}/>
                <Text style={{color:'yellow',fontWeight:'bold',fontSize:50}}>BEGINNER</Text>
            </View>
           
            <TouchableOpacity >
        <View style={styles.beginnerbox}>
          <View style={styles.beginner}>
          <FontAwesomeIcon icon={faDumbbell} size={40} color='black'/>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Chest
              </Text>
              </View>
        </View>
 </TouchableOpacity>
 
 <TouchableOpacity onPress={() => navigation.navigate('BeginnerAbs')}>
        <View style={styles.intermediatebox}>
          <View style={styles.intermediate}>
          <FontAwesomeIcon icon={faDumbbell} size={40} color='black'/>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Abs
              </Text>
              </View>
              </View>
  </TouchableOpacity> 
                  
   
 <TouchableOpacity >
        <View style={styles.advancedbox}>
          <View style={styles.advanced}>
          <FontAwesomeIcon icon={faDumbbell} size={40} color='black'/>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Shoulder&Back
              </Text>
              </View>
        </View>

</TouchableOpacity>
 <TouchableOpacity>
        <View style={styles.advancedbox}>
          <View style={styles.advanced}>
          <FontAwesomeIcon icon={faDumbbell} size={40} color='black'/>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Leg
              </Text>
              </View>
        </View>
</TouchableOpacity>

 <TouchableOpacity >
        <View style={styles.advancedbox}>
          <View style={styles.advanced}>
          <FontAwesomeIcon icon={faDumbbell} size={40} color='black'/>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Arm
              </Text>
              </View>
        </View>
</TouchableOpacity>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
   
    image:{
        marginTop:10,
        paddingTop:15,
        paddingBottom:50,
        backgroundColor:'blue',
        flexDirection:'row',
        alignItems:"center"
    },
    beginnerbox:{
      marginTop:30,
      paddingBottom:50,
      backgroundColor:'blue',
      borderRadius:9,
    },
    intermediatebox:{
      marginTop:15,
      paddingBottom:50,
      backgroundColor:'blue',
      borderRadius:9,
    },
    advancedbox:{
      marginTop:15,
      paddingBottom:50,
      backgroundColor:'blue',
      borderRadius:9,
    },
    imagebox:{
      marginTop:15,
      paddingBottom:50,
      backgroundColor:'purple',
      borderRadius:9,
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
    image:{
      flexDirection:'row'
    },
})