import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MeetingScreen from "../Screens_Styles/Meetings_Screen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function MeetingsStack(props) {
  const { setAuthToken } = props;
  const [x, setX] = React.useState(0);
  return (
    <Stack.Navigator initialRouteName={routes.MeetingsScreen}>
      <Stack.Screen
        options={{ title: "Main Page", headerShown: false }}
        name={routes.MeetingsScreen}
        component={MeetingScreen}
      />
    </Stack.Navigator>
  );
}

export default MeetingsStack;
