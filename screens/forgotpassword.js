import { View,TouchableOpacity,Text,StyleSheet,Alert,ImageBackground,ActivityIndicator} from "react-native";
import { SafeArea } from "../components/safearea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Inter_400Regular } from "@expo-google-fonts/inter"
import { useState,useEffect,useCallback ,useContext} from "react";
import {AppContext} from "../settings/gbVariables"
import { TextInput,Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from "formik";
import { auth } from "../settings/firebase";
import { getAuth,onAuthStateChanged ,sendPasswordResetEmail} from "firebase/auth";

const validationRules = yup.object({
  email:yup.string().required('you must fill this field').min(5).max(36),

});


export function Fpassword ({navigation}) {
  const image = {uri: 'https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'};
  const [appIsReady, setAppIsReady] = useState(false);
  const [eventActivityIndicator,seteventActivityIndicator]= useState(false);
  const {setUid} = useContext(AppContext)

    useEffect(() => {

        async function prepare() {
          try {
            await Font.loadAsync({Inter_400Regular});
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (e) {
            console.warn(e);
          } finally {
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      if (!appIsReady) {
        return null;
      }
    

      return(
        <ImageBackground source={image} resizeMode='cover'
      style={style.image}>
        <SafeArea>
          <View style={style.heding}>
          { eventActivityIndicator ? <ActivityIndicator size='large' color='white'/> :null}
    <Formik
    initialValues={{ email: '',password:'' }}
    onSubmit={(values,action) =>{
        seteventActivityIndicator(true);
        sendPasswordResetEmail(auth,values.email)
        .then
        (() => {Alert.alert( 'message',
        'your Reset Link Was Sent',
        [{text:'go to Login',onPress:() => navigation.navigate('Login')}])})
        .catch(error =>  {if (error.code == 'auth/invalid-email') {
          seteventActivityIndicator(false);
          Alert.alert(
              'message',
              'Invalid email/password',
              [{text:'Try Again'}]
          )
      } else if (error.code == 'auth/wrong-password' || error.code == 'auth/user-not-found'){
        seteventActivityIndicator(false);
      Alert.alert(
          'message',
          'invalid email/password',
          [{text:'Try Again'}])
      }else {
        seteventActivityIndicator(false);
          Alert.alert(
              'message',
              'Something Went Wrong',
              [{text:'Dismiss'}])}
      })
      }}
    validationSchema={validationRules}
  >
    {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
      <View>

        <View>
            <TextInput
            label="Email"
            mode="flat"
            Style={style.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            />
            {touched.email && errors.email ? 
            <Text style={{color:'red'}}>{errors.email}</Text>
            :null}
        </View>
        
        <View style={style.button}>
          <Button 
          buttonColor="purple"
          textColor="yellow"
          mode="contained"
          onPress={handleSubmit}>
           Submit
          </Button>
        </View>

        
      </View>
    )}
  </Formik>
      </View>
  </SafeArea>
  </ImageBackground>
    )
  }

  const style = StyleSheet.create({
    heding:{ 
        marginTop:'40%',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:280
        },
  
    title2:{
      fontSize:27,
        marginTop:15,
        color:'blue'
    },
    input:{
        marginTop:10,
        width:300
    },
    button:{
      marginTop:20,
      width:300,
      height:70
    },
    account:{
      flexDirection:'row'
    },
    sign:{
      color:'purple'
    },
    image: {
      flex: 1,
      justifyContent: 'center',}
})

