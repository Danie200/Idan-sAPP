import { View,TouchableOpacity,Text,StyleSheet,Alert} from "react-native";
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
        <SafeArea>
          <View style={style.heding}>
            <Text style={style.title}>Idan's App</Text>
            <Text style={style.title2}>Login To Get Started</Text>  
    <Formik
    initialValues={{ email: '',password:'' }}
    onSubmit={(values,action) =>{
      signInWithEmailAndPassword(auth,values.email,values.password)
     .then (()=>{
        Alert.alert('notify','lOGGED IN',
        [{Text:'Go to Home',onPress:() => navigation.navigate('Mainscreen2')}])
     })
      }}
    validationSchema={validationRules}
  >
    {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
      <View>

        <View>
            <TextInput
            label="Email"
            mode="outlined"
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
            mode="outlined"
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
    )
  }

  const style = StyleSheet.create({
    heding:{ 
        
        alignItems:'center',
        justifyContent:'center',
        marginBottom:280
        },
    title:{
        fontSize:35,
        color:'blue'
         },
    title2:{
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
})

