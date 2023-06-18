import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView,SafeAreaView} from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-native-paper'

export function Fbeginnerloseweight() {
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
     source={{uri:'https://media.istockphoto.com/id/841195992/photo/she-aspires-to-inspire-fitness-in-herself-everyday.jpg?s=612x612&w=0&k=20&c=FT-hoycTbTEgm9iCVTzckp_ZCoy-93I3TJeQWk3GFF0='}}/>

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
         Tiptoe Squat Jump
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
            Left/Right Jump
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
        Shoulder Muscle Activation
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
        Double Leg Butt kick
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
            V Crunch
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
            Kneeling Left Diagonal Bracing
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
        Kneeling Right Diagonal Bracing
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
            Straight Leg Supine Back Bracing
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
             Hip Bridge
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
        Dynamic Plank Abdominal Jump
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
            Supine Alternating Leg Lift
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
            Alternating Lunge Back And Forth
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
        Left Abdominal Stretch
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
            Right Abdominal Stretch
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
           Dynamic Stretch Of Inner Thigh
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