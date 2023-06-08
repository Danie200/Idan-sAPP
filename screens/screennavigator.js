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
import { Name } from "./name";
import { Login } from "./login";
import { Gender } from "./gender";

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
            <Stack.Screen name="Gender" component={Gender}/>
        </Stack.Navigator>
    )
}