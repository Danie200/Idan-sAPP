import { View,TouchableOpacity,Text,StyleSheet,Alert,ImageBackground,ActivityIndicator} from "react-native";
import { SafeArea } from "../components/safearea";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useState,useEffect,useCallback ,useContext} from "react";
import  {AppContext} from "../settings/gbVariables"
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
  const image = {uri: 'https://images.pexels.com/photos/2092450/pexels-photo-2092450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'};
    const [appIsReady, setAppIsReady] = useState(false);
    const {setUid} = useContext(AppContext)
    const [eventActivityIndicator,seteventActivityIndicator]= useState(false);
    
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
                initialValues={{Email:'',Password:'',PasswordConfirmation:''}}
    onSubmit={(values,action) =>{
      seteventActivityIndicator(true);
      createUserWithEmailAndPassword(auth,values.Email,values.Password)
                  .then(() => onAuthStateChanged(auth,(user) => {
                    setUid(user.uid);//update to the user's uid
                    seteventActivityIndicator(false);
                    Alert.alert(
                        'message',
                        'your account was created',
                        [{text:'Create Profile',onPress:()=>navigation.navigate('CreateProfile')}],
                        
                    )
                  }))
                  .catch((error) =>{
                    //custom actions for different errors
                    if (error.code == 'auth/invalid-email') {
                        seteventActivityIndicator(false);
                        Alert.alert(
                            'message',
                            'invalid email',
                            [{text:'Try Again'}]
                        )
                    } else if (error.code == 'auth/email-already-in-use'){
                        seteventActivityIndicator(false);
                    Alert.alert(
                        'message',
                        'your account was created',
                        [{text:'Go To Login',onPress:() => navigation.navigate('Login')},
                        {text:'ForgotPassword',onPress:() => navigation.navigate('ResetPassword')}])
                    }else {
                        seteventActivityIndicator(false);
                        Alert.alert(
                            'message',
                            'Something Went Wrong',
                            [{text:'Dismiss'}])
                    }
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
          </ImageBackground>
    )
}

const style = StyleSheet.create({
    heding:{ 
        alignItems:'center',
        justifyContent:'center',
        marginBottom:280,
        marginTop:"40%"
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
    },
    image: {
      flex: 1,
      justifyContent: 'center',}
 
})