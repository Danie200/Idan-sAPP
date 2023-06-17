import { View,ActivityIndicator,Text,StyleSheet,Alert} from "react-native";
import { SafeArea } from "../components/safearea";
import {useContext, useState } from "react";
import { AppContext } from "../settings/gbVariables";
import { TextInput,Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from "formik";
import { db } from "../settings/firebase";
import { setDoc,doc} from "firebase/firestore";
import { auth } from "../settings/firebase";



const validationRules = yup.object({
    fName:yup.string().required('required field',),
    lName:yup.string().required('required field',),
    Weight:yup.string(),
    Height:yup.string(),
    DOB:yup.string(),
});

export function CreateProfile ({navigation}) {
    const {uid} = useContext(AppContext);
    const [eventActivityIndicator,seteventActivityIndicator]= useState(false);

   
      return(
        <SafeArea>
                <Text style={styles.title}>Create Profile </Text>
                { eventActivityIndicator ? <ActivityIndicator size='small'/> :null}
                <Formik
                initialValues={{fName:'',lName:'',Weight:'',Height:'',DOB:'', }}
    onSubmit={(values,action) =>{
      seteventActivityIndicator(true);
      setDoc(doc(db,"Idan",uid),{
        firstName:values.fName,
        lastName:values.lName,
        Weight:values.Weight,
        Height:values.Height,
        dateOfBirth:'01/27/2000',
       
        CreatedAt:new Date().getTime()
      }).then(() => {
        seteventActivityIndicator(false);
        Alert.alert(
          'Message',
          'profile created!!',
          [
            {text:'Select Gender',onPress:() => navigation.navigate('Gender')}
          ]
        )
      })
      .catch(error => {
        seteventActivityIndicator(false);
        Alert.alert(
          'message',
          error.message,
          [{text:'Dismiss'}]
        )
      })

      }}
      validationSchema={validationRules}
    >
      {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
        <View>
          <View style={styles.form}>
              <TextInput
              outlineColor="gray"
              activeOutlineColor="blue"
              label="first name"
              mode="outlined"
              onChangeText={handleChange('fName')}
              onBlur={handleBlur('fName')}
              value={values.fName}
              />
              {touched.fName && errors.fName ? 
              <Text style={{color:'red'}}>{errors.fName}</Text>
              :null}
          </View>

          <View>
              <TextInput
              outlineColor="gray"
              activeOutlineColor="blue"
              label="last name"
              mode="outlined"
              Style={styles.input}
              onChangeText={handleChange('lName')}
              onBlur={handleBlur('lName')}
              value={values.lName}
              />
              {touched.lName && errors.lName ? 
              <Text style={{color:'red'}}>{errors.lName}</Text>
              :null}
          </View>

          <View>
              <TextInput
              outlineColor="gray"
              activeOutlineColor="blue"
              label="Weight"
              mode="outlined"
              Style={styles.input}
              onChangeText={handleChange('Weight')}
              onBlur={handleBlur('Weight')}
              value={values.Weight}
              />
              {touched.Weight&& errors.Weight ? 
              <Text style={{color:'red'}}>{errors.Weight}</Text>
              :null}
          </View>

          <View>
              <TextInput
              outlineColor="gray"
              activeOutlineColor="#5D9C59"
              label="Height"
              mode="outlined"
              Style={styles.input}
              onChangeText={handleChange('Height')}
              onBlur={handleBlur('Height')}
              value={values.Height}
              />
              {touched.Height && errors.Height ? 
              <Text style={{color:'red'}}>{errors.Height}</Text>
              :null}
          </View>


          <View style={styles.button}>
            <Button
            buttonColor="blue"
            textColor="black" 
            mode="contained"
            onPress={handleSubmit}
            contentStyle={{paddingVertical:6}}
            style={{marginVertical:12}}>
              {
                eventActivityIndicator
                ?<ActivityIndicator size='small'/>
                :'Create'
              }
            </Button>
          </View>
        </View>
      )}
          </Formik>
          
              
          </SafeArea>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:35,
    },
    form:{
      flexDirection:'column',
      gap:4
    }
  })