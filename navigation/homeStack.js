import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainScreen from "../Screens/Main_Screen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function HomeStack(props) {
  const { setAuthToken } = props;

  return (
    <Stack.Navigator initialRouteName={routes.Main}>
      <Stack.Screen
        options={{ title: "Main Page", headerShown: false }}
        name={routes.Main}
        component={MainScreen}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;

