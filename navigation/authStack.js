import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../Screens/Account_Screen";
import ForgotPasswordScreen from "../Screens/ForgotPassword_Screen";
import LogInScreen from "../Screens/Login_Screen";
import MainScreen from "../Screens/Main_Screen";
import MeetingsScreen from "../Screens/Meetings_Screen";
import SettingsScreen from "../Screens/Setting_Screen";
import SignUpScreen from "../Screens/SignUp_Screen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  const { setAuthToken } = props;

  return (
    <Stack.Navigator initialRouteName={routes.Login}>
      <Stack.Screen name={routes.Login} options={{ headerShown: false }}>
        {(props) => <LogInScreen setAuthToken={setAuthToken} {...props} />}
      </Stack.Screen>

      <Stack.Screen
        options={{ title: "Sign Up", headerShown: true }}
        name={routes.Signup}
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{ title: "Main Page", headerShown: false }}
        name={routes.Main}
        component={MainScreen}
      />
      <Stack.Screen
        options={{ title: "Forgot Password", headerShown: true }}
        name={routes.Forgot}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        options={{ title: "Account", headerShown: false }}
        name={routes.Account}
        component={AccountScreen}
      />
      <Stack.Screen
        options={{ title: "Settings", headerShown: false }}
        name={routes.Settings}
        component={SettingsScreen}
      />

      <Stack.Screen
        options={{ title: "Meetings", headerShown: false }}
        name={routes.Meetings}
        component={MeetingsScreen}
      />

      {/* add the forgotpassword stackscreen, dont forgot to make the actual screen called FogotPassword */}
    </Stack.Navigator>
  );
}

export default AuthStack;
//<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//copy this page into a new navigation folder file, call it mainStack, and decide what the first screen of this page would..

//handleBack() {

//navigation.navigate.goBack();
//navigation.pop(1);
//}
