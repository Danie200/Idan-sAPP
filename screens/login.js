import { View,TouchableOpacity,Text,StyleSheet,Alert,ImageBackground} from "react-native";
import { SafeArea } from "../components/safearea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Inter_400Regular } from "@expo-google-fonts/inter"
import { useState,useEffect,useCallback } from "react";
import { TextInput,Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from "formik";
import { auth } from "../settings/firebase";
import { getAuth,onAuthStateChanged ,signInWithEmailAndPassword } from "firebase/auth";

const validationRules = yup.object({
  email:yup.string().required('you must fill this field').min(5).max(36),
  password:yup.string().required().min(4)
});


export function Login ({navigation}) {
  const image = {uri: 'https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'};
  const [appIsReady, setAppIsReady] = useState(false);

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
    <Formik
    initialValues={{ email: '',password:'' }}
    onSubmit={(values,action) =>{
      signInWithEmailAndPassword(auth,values.email,values.password)
     .then (()=>{
        Alert.alert('notify','lOGGED IN',
        [{Text:'Go to Home',onPress:() => navigation.navigate('Gender')}])
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
        
        <View>
            <TextInput
            label='password'
            mode="flat"
            style={style.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={true}
            />
            {touched.password && errors.password ?
            <Text style={{color:'red'}}>
              {errors.password}</Text>:null}
        </View>
        
        <View style={style.button}>
          <Button 
          buttonColor="blue"
          textColor="black"
          mode="contained"
          onPress={handleSubmit}>
            Login
          </Button>
        </View>

        
      </View>
    )}
  </Formik>
            <View style={style.account}>
                <Text style={{color:'red'}}>Don't Have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Name')}>
                    <Text style={style.sign}>Signup</Text>
                </TouchableOpacity>
            </View>
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
      color:'blue'
    },
    image: {
      flex: 1,
      justifyContent: 'center',}
})

