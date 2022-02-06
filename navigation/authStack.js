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
        options={{ title: "Forgot Password", headerShown: true }}
        name={routes.Forgot}
        component={ForgotPasswordScreen}
      />
      {}
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
