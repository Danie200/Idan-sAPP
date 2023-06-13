import { NavigationContainer } from "@react-navigation/native";
import {StackNavigation} from "./screens/screennavigator"
import { AppProvider } from "./settings/gbVariables";

export default function App () {
  return(
<AppProvider>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
 </AppProvider>
  )
}





