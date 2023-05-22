import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainStackNavigator from "./src/Navigators/MainStack";



const App = () => {
  return(
    <NavigationContainer>
     
      <MainStackNavigator />
      
    </NavigationContainer>
  );
}

export default App;