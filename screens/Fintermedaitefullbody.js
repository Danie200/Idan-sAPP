import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView,SafeAreaView} from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-native-paper'

export function Fintermediatefullbody({navigation}) {
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
     source={{uri:'https://media.istockphoto.com/id/1254996126/photo/beautiful-young-sports-lady-doing-push-ups-while-workout-at-home.jpg?s=612x612&w=0&k=20&c=RrfOu6AOL-RiHUoew1mb0BRcvenLAAn13Q4YDglUWdM='}}/>

     <ScrollView showsVerticalScrollIndicator={false}>
      <View  style={{paddingTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          Slow Mountain Climber
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
        Hip Warm Up
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
            Plank
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
        Alternating Leg Raising Plank
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
            Rapid Mountain Climber
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
        Cross Mountain Climber
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
        Left Handed Bird Stretch
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
        Right Handed Bird Stretch
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
        Bracing Abdominal Jump
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
        Dynamic Plank
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
            V Bracing
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
        Left Leg Front Stretch
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
        Right Leg Front Stretch
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
        Abdominal Stretch
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
            Back Stretch
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
           Supine Left Leg Back Stretch
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
        Supine Right Leg Back Stretch
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