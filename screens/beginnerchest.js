import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView,SafeAreaView} from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-native-paper'

export function Beginnerchest({navigation}) {
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
     source={{uri:'https://media.istockphoto.com/id/1179784738/photo/man-with-pain-in-his-stomach.jpg?b=1&s=612x612&w=0&k=20&c=Jya38eP4q7pFlO5Fec76tU5YKhU46bLIv7q45PBAW2s='}}/>

     <ScrollView showsVerticalScrollIndicator={false}>
      <View  style={{paddingTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,fontWeight:'bold',}}>
          Jumping Jacks
        </Text>
        <Text style={{fontSize:15,}}>
          00:30
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Jumpingjacks')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>
      
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Incline push-ups
        </Text>
        <Text style={{fontSize:15,}}>
        x10
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Inclinepushup')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
         Push-Ups
        </Text>
        <Text style={{fontSize:20,}}>
         x8
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Pushup')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:"column"}}>
        <Text  style={{fontSize:20,fontWeight:'bold'}}>
        Wide Arm Push-Ups
        </Text>
        <Text  style={{fontSize:20,}}>
        x8
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Widearmpushup')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Tricep Dips
        </Text>
        <Text style={{fontSize:20,}}>
          x10
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Tricepdips')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
       Wide Arm Push-Ups
        </Text>
        <Text style={{fontSize:20,}}>
          x6
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Widearmpushup')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
       Incline Push-Ups
        </Text>
        <Text style={{fontSize:20,}}>
        x8
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Inclinepushup')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:"column"}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
        Triceps Dips
        </Text>
        <Text style={{fontSize:20,}}>
          x8
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Tricepdips')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
       Knee Push-Ups
        </Text>
        <Text style={{fontSize:20,}}>
       x8
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Kneepushup')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
          <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
       Cobra Stretch
        </Text>
        <Text style={{fontSize:20,}}>
          00:20
        </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CobraStretch')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
        </View>
        <Text>
          _________________________________________________
        </Text>
      </View>

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <View style={{flexDirection:"columns"}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
      Chest Stretch
        </Text>
        <Text style={{fontSize:20,}}>
        00:20
        </Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('ChestStretch')}>
        <FontAwesomeIcon
        icon={faBars} size={25}/>
        </TouchableOpacity>
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
          onPress={() => navigation.navigate('Time')}
          >
            Start
          </Button>
          </View>

      </SafeAreaView>
     
  )

}

const styles = StyleSheet.create({

 

})