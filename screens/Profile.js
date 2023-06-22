import { useContext, useEffect, useState } from "react";
import { AppContext } from "../settings/gbVariables";
import { StyleSheet,SafeAreaView,Image,View,Text,Alert} from "react-native";
import { Button } from "react-native-paper";
import { db } from "../settings/firebase";
import { getDoc,doc } from "firebase/firestore";
import { SafeArea } from "../components/safearea";

export function Profile ({navigation}) {
    const { uid} = useContext(AppContext);
    const [userRecords,setUserRecords] = useState({})

    //fetch dATA AFTER COMPONENT IS LOADED
 //console.log(uid);
    useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc (doc(db,"Idan",uid))
            setUserRecords(snapShot.data())  
        }
        handleGetUserRecords();
        if (firstName == undefined) {
         Alert.alert('message',
         "You Haven't Created Your Profile",
         [{text:'Go to Create Profile',onPress:()=>navigation.navigate('CreateProfile')}])
        }
    },[])
    //console.log(userRecords);//delete after testing
    return ( 
       <SafeArea>
      
<View style={{backgroundColor:'white',marginHorizontal:12,marginBottom:12,borderRadius:8,padding:12,borderWidth:2,marginTop:20}}>
            <View style={{paddingLeft:9}}>
            <Text style={{fontWeight:'bold'}}>Name</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>{userRecords.firstName} {userRecords.lastName}</Text>
            </View>
         </View>

         <View style={{backgroundColor:'white',marginHorizontal:12,marginBottom:12,borderRadius:8,padding:12,borderWidth:2,}}>
            <View style={{paddingLeft:9}}>
            <Text style={{fontWeight:'bold'}}>Date Of Birth</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>{userRecords.dateOfBirth}</Text>
            </View>
         </View>

         <View style={{backgroundColor:'white',marginHorizontal:12,marginBottom:12,borderRadius:8,padding:12,borderWidth:2,}}>
            <View style={{paddingLeft:9}}>
            <Text style={{fontWeight:'bold'}}>Height</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>{userRecords.Height}</Text>
            </View>
         </View>

         <View style={{marginHorizontal:12,marginBottom:12,borderRadius:8,padding:12,backgroundColor:'white',borderWidth:2,}}>
            <View style={{paddingLeft:9}}>
            <Text style={{fontWeight:'bold'}}>Weight</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>{userRecords.Weight}</Text>
            </View>
         </View>
      
       </SafeArea>
    )
}

const styles = StyleSheet.create({
   
})