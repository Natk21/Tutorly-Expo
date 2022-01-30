import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import LogInScreen from "../Screens/Login_Screen";
import SignUpScreen from "../Screens/SignUp_Screen";
import MainScreen from "../Screens/Main_Screen";
import ForgotPassword from "../Screens/ForgotPassword_Screen";
import routes from "./routes";
import AccountScreen from "../Screens/Account_Screen";
import SettingsScreen from "../Screens/Setting_Screen";
import MeetingsScreen from "../Screens/Meetings_Screen";

const Stack = createNativeStackNavigator();

function AuthStack() 
{
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.LOGIN}>
        <Stack.Screen
          name={routes.LOGIN}
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ title: "Sign Up" }}
          name={routes.SIGNUP}
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options = {{title: "Main Page"}}
          name = {routes.MAIN}
          component = {MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options = {{title: "Forgot Password"}}
          name = {routes.ForgotPassword}
          component = {ForgotPasswordScreen}
          options={{ headerShown: false }}
        
        />
        <Stack.Screen
        options = {{title: "Account"}}
        name = {routes.Account}
        component  {AccountScreen}
        options={{ headerShown: false }}
        
        />
        <Stack.Screen
          options = {{title: "Settings"}}
          name = {routes.Settings}
          component {SettingsScreen}
          options= {{headerShown: false}}
        
        />

<Stack.Screen
          options = {{title: "Meetings"}}
          name = {routes.Meetings}
          component {MeetingsScreen}
          options= {{headerShown: false}}
        
        />

        
      {/* add the forgotpassword stackscreen, dont forgot to make the actual screen called FogotPassword */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default AuthStack;
//<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//copy this page into a new navigation folder file, call it mainStack, and decide what the first screen of this page would..
