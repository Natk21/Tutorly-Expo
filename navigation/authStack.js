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
    </Stack.Navigator>
  );
}

export default AuthStack;
//<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
