import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../Screens_Styles/Profile_Screen";
import routes from "./routes";
const Stack = createNativeStackNavigator();

function ProfileStack(props) {
  const { setAuthToken } = props;
  const [x, setX] = React.useState(0);
  return (
    <Stack.Navigator initialRouteName={routes.ProfileStack}>
      <Stack.Screen
        options={{ title: "Main Page", headerShown: false }}
        name={routes.ProfileScreen}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
