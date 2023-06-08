import { View,StyleSheet,SafeAreaView,Platform,StatusBar,ImageBackground} from "react-native";
import React from "react";
export function  SafeArea ({children}) {
   // const image = {uri: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600'};
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                {children}
             </View>
         
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
    flex:1,
    marginTop:Platform.OS == 'android' ?  StatusBar.currentHeight :0,
   justifyContent:'center',
      },
     
     
})