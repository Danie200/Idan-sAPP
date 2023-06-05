import { useState,useEffect,useCallback } from "react";
import { View,Text,StyleSheet,FlatList,Image,TouchableOpacity,ImageBackground} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { SafeArea } from "../components/safearea";
import React from "react";
import { Button } from "react-native-paper";

const Tab = createBottomTabNavigator();
 export function Screen1 ({navigation}) {
 
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
      <SafeArea>
         
        <View style={styles.start}>
        <View style={styles.button}>
          <Button 
          mode='contained'
          style={{backgroundColor:'blue'}}
          onPress={() => navigation.navigate('Name')}>
            Continue
          </Button>
        </View>
        </View>
     
      </SafeArea>
        
    )
}

const styles = StyleSheet.create({ 
    start:{
   alignItems:'center'
    
    },
})