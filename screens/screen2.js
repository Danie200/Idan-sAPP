import { useState,useEffect,useCallback } from "react";
import { View,Text,StyleSheet,FlatList,Image, TouchableOpacity,ImageBackground} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { SafeArea } from "../components/safearea";
import {FScreen2} from "./femalescreen2"

const Tab = createBottomTabNavigator();

 export function Screen2 ({navigation}) {
  const image = {uri: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'};
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
        Select Level
      </Text>
    </View>
     <View >
        <View>
          <View style={styles.up}>
          <TouchableOpacity onPress={() => navigation.navigate('beginnerscreen')}>
            <View style={styles.beginnerbox}>
              <View style={styles.beginner}>
            
                  <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                    Beginner
                  </Text>
                  </View>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => navigation.navigate('intermediatescreen')}>
              <View style={styles.intermediatebox}>
              <View style={styles.intermediate}>
             
                  <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                    Intermediate
                  </Text>
                  </View>
                  </View>
            </TouchableOpacity> 
            </View>
         </View>        

          <View style={styles.down}>
        <TouchableOpacity onPress={() => navigation.navigate('advancedscreen')}>
         <View style={styles.advancedbox}>
          <View style={styles.advanced}>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Advanced
              </Text>
              </View>
        </View>
         </TouchableOpacity>
         </View>
</View> 

</SafeArea> 
</ImageBackground>  
     )};

     export function Mainscreen2 () {
      return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Mainscreen2') {
                iconName = focused
                  ? 'man'
                  : 'man-outline';
              } else if (route.name === 'femalescreen2') {
                iconName = focused ? 'woman' : 'woman-outline';
              }
              
    
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'grey',
          })}
        >
          <Tab.Screen name="MEN FITNESS" component={Screen2} options={{headerShown:false}}/>
          <Tab.Screen name="WOMEN FITNESS" component={FScreen2}  options={{headerShown:false}} />
        </Tab.Navigator>
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
    marginRight:50,
   
  },
  advancedbox:{
    width:160,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#77037B',
    borderRadius:10,
    marginTop:20
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
