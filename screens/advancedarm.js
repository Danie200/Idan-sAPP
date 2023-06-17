import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView,SafeAreaView} from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-native-paper'

export function Advancedarm() {
  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({ Inter_500Medium });
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
    return null;
  }
  return (
   
  
    <SafeAreaView style={{flex:1}} >
     <Image
       style={{
        width: 360,
        height: 150,
        resizeMode:'cover',
      }}
     source={{uri:'https://media.istockphoto.com/id/184999931/photo/strong-guy-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=HmnWnUwuDavbfMDyjv8FGj_KloRXKNUEVvj2YASRbeY='}}/>

     <ScrollView showsVerticalScrollIndicator={false}>
      <View  style={{paddingTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          Arm Circles ClockWise
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>
      
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Arm Circles Counterclockwise
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            Skipping Without Rope
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text  style={{fontSize:20,fontWeight:'bold'}}>
            Leg Barbell Curl Left
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
         Leg Barbell Curl Right
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            Burpees
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Arm Curls Crunch Left
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Arm Curls Crunch Right
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Floor Tricep Dips
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            Alternating Hooks
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Military Push Ups
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            Shoulder Gators
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            Floor Tricep Dips
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Alternating Hooks
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            Burpees
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
           Arm Curl Crunch Left
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>
      
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Arm Curl Crunch  Right
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
           Military Push Ups
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
           Shoulder Gators
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          Doorway Curls Left
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          Doorway Curls Right
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
         Modified Push-Up Low Hold
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Chest Press Pulse
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Push-Up & Rotation
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
       Triceps Stretch Left
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
       Triceps Stretch Right
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            Standing Biceps Stretch Left
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            Standing Biceps Stretch Right
        </Text>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

    
     </ScrollView>
     <View style={{justifyContent:'center',paddingTop:12,margin:12,}}>
      <Button 
          buttonColor="blue"
          textColor="black"
          mode='contained'
          >
            Start
          </Button>
          </View>

      </SafeAreaView>
     
  )

}

const styles = StyleSheet.create({

 

})