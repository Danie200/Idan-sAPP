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
import {fitnessdata} from '../assets/data'

const Tab = createBottomTabNavigator();
 export function Advancedscreen () {
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
                <Text style={{color:'yellow',fontWeight:'bold',fontSize:50}}>ADVANCED</Text>
            </View>
           
          <View >
            <FlatList 
            data={fitnessdata}
            renderItem={({item}) => {
              return (
            <TouchableOpacity>
                <View style={styles.beginnerBlock}>
                 <Text style={{color:'yellow',fontWeight:'bold',fontSize:25}}>
                  {item.log}</Text> 
                </View>
                </TouchableOpacity>
              )
            }}
            key={({item}) => item.id}
            showsVerticalScrollIndicator={false}/>
          </View>
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
    beginnerBlock:{
        marginTop:50,
    paddingBottom:50,
    backgroundColor:'blue',
    borderRadius:9,
    paddingTop:10
    },
})