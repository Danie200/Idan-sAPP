import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen1 } from "./screen1";
import {Mainscreen2} from "./screen2"
import { Beginnerscreen } from "./beginnerscreen";
import { Intermediatescreen } from "./intermediatescreen";
import { Advancedscreen } from "./advancedscreen";
import { Femalescreen2} from "./femalescreen2";
import {FBeginnerscreen} from "./Fbeginnerscreen"
import {Fintermediatescreen} from "./Fintermediatescreen"
import {Fadvancedscreen} from "./Fadvancedscreen"
import { Beginnerabs } from "./beginnerabs";
import { Beginnerarm } from "./beginnerarm";
import { Beginnerchest } from "./beginnerchest";
import { Beginnerleg } from "./beginnerlegs";
import { Beginnersb } from "./beginnershoulder&back";
import { Name } from "./name";
import { Login } from "./login";
import { Gender } from "./gender";
import { CreateProfile } from "./createProfile";
import { Profile } from "./Profile";
import { Intermediatechest } from "./intermediatechest";
import { Intermediateabs } from "./intermediateabs";
import { Intermediateleg } from "./intermediateleg";
import { Intermediatearm } from "./intermediatearm";
import { Intermediatesb } from "./intermediatesb";
import { Advancedarm } from "./advancedarm";
import { Advancedchest } from "./Advancedchest";
import { Advancedabs } from "./advancedabs";
import { Advancedleg } from "./advancedleg";
import { Advancedsb } from "./advancedsb";
import { Fbeginnerstaytoned } from "./Fbeginnerstaytoned";
import { Fbeginnerloseweight } from "./Fbeginnerloseweight";
import { Fbeginnerfullbody } from "./Fbeginnerfullbody";
import { Fbeginnerabs } from "./Fbeginnerabs";
import { Fintermediateloseweight } from "./Fintermediateloseweight";
import { Fintermediateabs } from "./Fintermediateabs";
import { Fintermediatestaytoned } from "./Fintermediatestaytoned";
import { Fintermediatefullbody } from "./Fintermedaitefullbody";
  const Stack = createNativeStackNavigator();
export function StackNavigation () {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="screen1" >
            <Stack.Screen name="Name" component={Name}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="screen1" component={Screen1}/>
            <Stack.Screen name="Mainscreen2" component={Mainscreen2} options={{headerShown:false}}/>
            <Stack.Screen name="beginnerscreen" component={Beginnerscreen}/>
            <Stack.Screen name="intermediatescreen" component={Intermediatescreen}/>
            <Stack.Screen name="advancedscreen" component={Advancedscreen}/>
            <Stack.Screen name="Femalescreen2" component={Femalescreen2}/>
            <Stack.Screen name="FBeginnerscreen" component={FBeginnerscreen}/>
            <Stack.Screen name="Fintermediatescreen" component={Fintermediatescreen}/>
            <Stack.Screen name="Fadvancedscreen" component={Fadvancedscreen}/>
            <Stack.Screen name="BeginnerAbs" component={Beginnerabs}/>
            <Stack.Screen name="Barm" component={Beginnerarm}/>
            <Stack.Screen name="Bchest" component={Beginnerchest}/>
            <Stack.Screen name="Bleg" component={Beginnerleg}/>
            <Stack.Screen name="Bsb" component={Beginnersb}/>
            <Stack.Screen name="Gender" component={Gender}/>
            <Stack.Screen name="CreateProfile" component={CreateProfile}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Intermediatechest" component={Intermediatechest}/>
            <Stack.Screen name="Intermediateabs" component={Intermediateabs}/>
            <Stack.Screen name="Intermediateleg" component={Intermediateleg}/>
            <Stack.Screen name="Intermediatearm" component={Intermediatearm}/>
            <Stack.Screen name="Intermediatesb" component={Intermediatesb}/>
            <Stack.Screen name="Advancedarm" component={Advancedarm}/>
            <Stack.Screen name="Advancedchest" component={Advancedchest}/>
            <Stack.Screen name="Advancedabs" component={Advancedabs}/>
            <Stack.Screen name="Advancedleg" component={Advancedleg}/>
            <Stack.Screen name="Advancedsb" component={Advancedsb}/>
            <Stack.Screen name="Fbeginnerstaytoned" component={Fbeginnerstaytoned}/>
            <Stack.Screen name="Fbeginnerloseweight" component={Fbeginnerloseweight}/>
            <Stack.Screen name="Fbeginnerfullbody" component={Fbeginnerfullbody}/>
            <Stack.Screen name="Fbeginnerabs" component={Fbeginnerabs}/>
            <Stack.Screen name="Fintermediateloseweight" component={Fintermediateloseweight}/>
            <Stack.Screen name="Fintermediateabs" component={Fintermediateabs}/>
            <Stack.Screen name="Fintermediatestaytoned" component={Fintermediatestaytoned}/>
            <Stack.Screen name="Fintermediatefullbody" component={Fintermediatefullbody}/>

        </Stack.Navigator>
    )
}