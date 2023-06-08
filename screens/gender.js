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
  const image = {uri: 'data:image/jpeg;base64,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'};
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
