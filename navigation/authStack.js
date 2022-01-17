import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LogInScreen from "../Screens/Login_Screen";
import SignUpScreen from "../Screens/SignUp_Screen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
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
      />
      {/* add the forgotpassword stackscreen, dont forgot to make the actual screen called FogotPassword */}
    </Stack.Navigator>
  );
}

export default AuthStack;
//<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//copy this page into a new navigation folder file, call it mainStack, and decide what the first screen of this page would..
