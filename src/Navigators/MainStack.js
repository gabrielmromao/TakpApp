import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashScreen from "../Pages/DashScreen";
import LoginScreen from "../Pages/LoginScreen";
const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen 
             options={{
                headerStyle: {backgroundColor:'#000'},
                headerTitleStyle: {color: '#fff'},
                headerTitleAlign: 'center'
             }}
             name='Login' 
             component={LoginScreen}/>
             <MainStack.Screen 
             options={{
                headerStyle: {backgroundColor:'#fff'},
                headerTitleStyle: {color: '#000'},
                headerTitleAlign: 'center',
                headerStyle: {color:'#fff'} 
             }}
             name='Dash' 
             component={DashScreen}/> 
        </MainStack.Navigator>
    )
}
export default MainStackNavigator;