import { View,TouchableOpacity,Text,StyleSheet,Alert} from "react-native";
import { SafeArea } from "../components/safearea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useState,useEffect,useCallback } from "react";
import { TextInput,Button } from 'react-native-paper';
import { Inter_400Regular } from "@expo-google-fonts/inter";
import * as yup from 'yup';
import { Formik } from "formik";
import { auth } from "../settings/firebase";
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

const validationRules = yup.object({
  Email:yup.string().required('you must fill this field').min(5).max(36),
  Password:yup.string().required('Input yr password').min(4)
  .oneOf([yup.ref('PasswordConfirmation'),null],'Password must match')

});

export function Name ({navigation}) {
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
                <Text style={style.title2}>create an account</Text>

                <Formik
                initialValues={{Email:'',Password:'',PasswordConfirmation:''}}
    onSubmit={(values,action) =>{
      createUserWithEmailAndPassword(auth,values.Email,values.Password,values.PasswordConfirmation)
      .then (()=>{
        Alert.alert('notify','Successful',
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
            mode="flat"
            Style={style.input}
            onChangeText={handleChange('Email')}
            onBlur={handleBlur('Email')}
            value={values.Email}
            />
            {touched.Email&& errors.Email? 
            <Text style={{color:'red'}}>{errors.Email}</Text>
            :null}
        </View>
        <View >
            <TextInput
            label="Password"
            textColor="black"
            mode="flat"
            Style={style.input}
            onChangeText={handleChange('Password')}
            onBlur={handleBlur('Password')}
            value={values.Password}
            />
            {touched.Password&& errors.Password? 
            <Text style={{color:'red'}}>{errors.Password}</Text>
            :null}
        </View>
        <View >
            <TextInput
            label="PasswordConfirmation"
            mode="flat"
            Style={style.input}
            onChangeText={handleChange('PasswordConfirmation')}
            onBlur={handleBlur('PasswordConfirmation')}
            value={values.PasswordConfirmation}
            />
            {touched.PasswordConfirmation&& errors.PasswordConfirmation? 
            <Text style={{color:'red'}}>{errors.PasswordConfirmation}</Text>
            :null}
        </View>
        
        <View style={style.button}>
          <Button 
          mode="contained"
          style={{backgroundColor:'blue'}}
          onPress={handleSubmit}>
            Continue
          </Button>
        </View>

        <View style={style.inputt}>
        <Text style={{color:'red'}}>
          ALREADY HAVE AN ACCOUNT?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text  style={{color:'blue'}}>
          Login
        </Text>
        </TouchableOpacity>
        </View>

        
      </View>
    )}
          </Formik>
                  
               
              </View>
              
          </SafeArea>
    )
}

const style = StyleSheet.create({
    heding:{ 
        alignItems:'center',
        justifyContent:'center',
        marginBottom:280,
        marginTop:50
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
        marginTop:15,
        width:300
    },
    button:{
      marginTop:20,
      width:300,
      height:70,
      
    },
    inputt:{
      flexDirection:'row'
    }
 
})