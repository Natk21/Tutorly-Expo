import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

function ProfileStack(props) {
  const { setAuthToken } = props;
  const [x, setX] = React.useState(0);
  return <></>;
}

// {
//   /* <Stack.Navigator initialRouteName={routes.Main}>
// <Stack.Screen
//   options={{ title: "Main Page", headerShown: false }}
//   name={routes.Main}
//   component={MainScreen}
// />
// </Stack.Navigator> */
// }

export default ProfileStack;
