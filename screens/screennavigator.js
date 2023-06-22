import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen1 } from "./screen1";
import { Fpassword } from "./forgotpassword";
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
import { Fadvancedstaytoned } from "./Fadvancedstaytoned";
import { Fadvancedabs } from "./Fadvancedabs";
import { Fadvancedloseweight } from "./Fadvancdloseweight";
import { Fadvancedfullbody } from "./Fadvancedfullbody";
import { Jumpingjacks } from "./jumpingjacks";
import { Inclinepushup } from "./Inclinepushup";
import { Pushup } from "./Pushup";
import { Widearmpushup } from "./Widearmpushup";
import { Tricepsdips } from "./Tricepsdips";
import { Kneepushup } from "./kneepushup";
import { CobraStretch } from "./cobrastretch";
import { ChestStretch } from "./Cheststretch";
import { Jj } from "./testJJ";
import { TestTimer } from "./testTimer";
import { PracticeJumpJack } from "./practiceJUMPJ";
import { PracticeInclinePushup } from "./practiceIncline";
import { InclineTimer } from "./inclineTimer";
import { PracticePushup } from "./PracticePushup";
import { PushUpTimer } from "./pushuptimer";
import { Practicewide } from "./practicewide";
import { WideTimer } from "./widetimer";
import { TricepTimer } from "./ticeptimer";
import { PracticeTriceps } from "./Practicetricep";
import { PracticeKnee } from "./practiceknee";
import { KneeTimer } from "./kneetimer";
import { PracticeCobra } from "./PracticeCobra";
import { CobraTimer } from "./cobratimer";
import { PracticeChest } from "./PracticeChest";
import { Secwide } from "./Secwide";
import { SecwideTimer } from "./secwidetimer";
import { Secincline } from "./secincline";
import { SecInclineTimer } from "./secinclinetimer";
import { SecTriceps } from "./sectricep";
import { SecTricepTimer } from "./sectriceptimer";

  const Stack = createNativeStackNavigator();
export function StackNavigation () {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="screen1" >
            <Stack.Screen name="Name" component={Name}/>
            <Stack.Screen name="FP" component={Fpassword}/>
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
            <Stack.Screen name="Fadvancedstaytoned" component={Fadvancedstaytoned}/>
            <Stack.Screen name="Fadvancedabs" component={Fadvancedabs}/>
            <Stack.Screen name="Fadvancedloseweight" component={Fadvancedloseweight}/>
            <Stack.Screen name="Fadvancedfullbody" component={Fadvancedfullbody}/>
            <Stack.Screen name="Jumpingjacks" component={Jumpingjacks}/>
            <Stack.Screen name="Inclinepushup" component={Inclinepushup}/>
            <Stack.Screen name="Pushup" component={Pushup}/>
            <Stack.Screen name="Widearmpushup" component={Widearmpushup}/>
            <Stack.Screen name="Tricepdips" component={Tricepsdips}/>
            <Stack.Screen name="Kneepushup" component={Kneepushup}/>
            <Stack.Screen name="CobraStretch" component={CobraStretch}/>
            <Stack.Screen name="ChestStretch" component={ChestStretch}/>
            <Stack.Screen name="Time" component={Jj}/>
            <Stack.Screen name="Timer" component={TestTimer}/>
            <Stack.Screen name="Pjumpjack" component={PracticeJumpJack}/>
            <Stack.Screen name="Pinclinepushup" component={PracticeInclinePushup}/>
            <Stack.Screen name="Tinclinepushup" component={InclineTimer}/>
            <Stack.Screen name="Ppushup" component={PracticePushup}/>
            <Stack.Screen name="Tpushup" component={PushUpTimer}/>
            <Stack.Screen name="Pwide" component={Practicewide}/>
            <Stack.Screen name="Twide" component={WideTimer}/>
            <Stack.Screen name="Ptriceps" component={PracticeTriceps}/>
            <Stack.Screen name="Ttriceps" component={TricepTimer}/>
            <Stack.Screen name="Pknee" component={PracticeKnee}/>
            <Stack.Screen name="TKnee" component={KneeTimer}/>
            <Stack.Screen name="Pcobra" component={PracticeCobra}/>
            <Stack.Screen name="Tcobra" component={CobraTimer}/>
            <Stack.Screen name="Pchest" component={PracticeChest}/>
            <Stack.Screen name="Secwide" component={Secwide}/>
            <Stack.Screen name="Tsecwide" component={SecwideTimer}/>
            <Stack.Screen name="secincline" component={Secincline}/>
            <Stack.Screen name="Tsecincline" component={SecInclineTimer}/>
            <Stack.Screen name="sectricep" component={SecTriceps}/>
            <Stack.Screen name="Tsectricep" component={SecTricepTimer}/>

        </Stack.Navigator>
    )
}