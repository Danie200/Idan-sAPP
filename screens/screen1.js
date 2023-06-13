import { useState,useEffect,useCallback } from "react";
import { View,Text,StyleSheet,FlatList,Image,TouchableOpacity,ImageBackground} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../components/safearea";
import React from "react";
import { Button } from "react-native-paper";

const Tab = createBottomTabNavigator();
 export function Screen1 ({navigation}) {
  const image = {uri: 'https://media.istockphoto.com/id/876895654/photo/white-silhouette-strenge-man-on-the-black-background.jpg?b=1&s=612x612&w=0&k=20&c=xsz8mbdrBxCW8v9m30ZP0yAy_xTpW42iNSIuNj6YECc='};
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
      
      <View style={{backgroundColor:'black', flex:1,}}>
        <ImageBackground source={image} resizeMode='center'
      style={styles.image}>
      <SafeArea>
        <View style={styles.start}>
        <View style={styles.button}>
          <Button 
          mode='contained'
          style={{backgroundColor:'blue'}}
          onPress={() => navigation.navigate('Name')}>
            Get Started
          </Button>
        </View>
        </View>
      </SafeArea>
      </ImageBackground>
      </View>
      
    )
}

const styles = StyleSheet.create({ 
    start:{
   alignItems:'center',
   marginTop:'90%',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    color:'white'}
      
})