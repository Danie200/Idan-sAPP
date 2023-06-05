import { useState,useEffect,useCallback } from "react";
import { View,Text,StyleSheet,FlatList,Image, TouchableOpacity,ScrollView} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { SafeArea } from "../components/safearea";
import {FemaleScreen2} from "../screens/femalescreen2."

const Tab = createBottomTabNavigator();

 export function Screen2 ({navigation}) {
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
      <SafeArea >
            <View >

        <View  style={styles.headerbox}>
            <View style={styles.header}>
                <FontAwesomeIcon icon={faFire} size={40} color='black'/>
                    <Text style={{fontSize:40,color:'yellow',fontWeight:'bold',}}>Men's Fitness</Text>
               
            </View>
       </View> 

  
      
        <View style={styles.fullbodybox}>
            <View style={styles.fullbody}>
                  <FontAwesomeIcon icon={faDragon} size={40} color='black'/>
                      <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                          FULLBODY</Text>
            </View>
        </View>

        <View style={styles.lowerbodybox}>
            <View style={styles.lowerbody}>
                  <FontAwesomeIcon icon={faDragon} size={40} color='black'/>
                      <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                          LOWERBODY
                      </Text>
            </View>
        </View>

 <TouchableOpacity onPress={() => navigation.navigate('beginnerscreen')}>
        <View style={styles.beginnerbox}>
          <View style={styles.beginner}>
          <FontAwesomeIcon icon={faDragon} size={40} color='black'/>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Beginner
              </Text>
              </View>
        </View>
 </TouchableOpacity>
 
 <TouchableOpacity onPress={() => navigation.navigate('intermediatescreen')}>
        <View style={styles.intermediatebox}>
          <View style={styles.intermediate}>
          <FontAwesomeIcon icon={faDragon} size={40} color='black'/>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Intermediate
              </Text>
              </View>
              </View>
  </TouchableOpacity> 
                  
   
 <TouchableOpacity onPress={() => navigation.navigate('advancedscreen')}>
        <View style={styles.advancedbox}>
          <View style={styles.advanced}>
          <FontAwesomeIcon icon={faDragon} size={40} color='black'/>
              <Text style={{color:'yellow',fontSize:20,fontWeight:'bold'}}>
                Advanced
              </Text>
              </View>
        </View>
</TouchableOpacity>

</View>
</SafeArea>   
     )};

     export function Mainscreen2 () {
      return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Mainscreen2') {
                iconName = focused
                  ? 'Man-sharp'
                  : 'Man-outline';
              } else if (route.name === 'femalescreen2') {
                iconName = focused ? 'Woman-sharp' : 'Woman-outline';
              }
              
    
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'grey',
          })}
        >
          <Tab.Screen name="MENFITNESS" component={Screen2} options={{headerShown:false}}/>
          <Tab.Screen name="WOMEN FITNESS" component={FemaleScreen2}  options={{headerShown:false}} />
        </Tab.Navigator>
      )
    }
const styles = StyleSheet.create({
 
  header:{
    flexDirection:'row',
    paddingRight:50,
    alignItems:'center',
    marginTop:30
  },
  headerbox:{
    marginTop:5,
    paddingBottom:50,
    backgroundColor:'blue'
  },
  headtext:{
    fontSize:20,
    color:'black',
    
  },
  fullbodybox:{
    marginTop:10,
    paddingBottom:50,
    backgroundColor:'blue',
    borderRadius:9,
  },
  fullbody:{
      flexDirection:'row',
      alignItems:'center'
  },
  lowerbodybox :{
    marginTop:10,
    paddingBottom:50,
    backgroundColor:'blue',
    borderRadius:9,
  },
  lowerbody:{
    flexDirection:'row',
      alignItems:'center'
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
    backgroundColor:'blue',
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
});
