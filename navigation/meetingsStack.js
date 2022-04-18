import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateMeetingScreen from "../Screens_Styles/Create_Meeting_Screen";
import MeetingScreen from "../Screens_Styles/Meetings_Screen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function MeetingsStack(props) {
  const { setAuthToken } = props;
  const [x, setX] = React.useState(0);
  return (
    <Stack.Navigator initialRouteName={routes.MeetingsScreen}>
      <Stack.Screen
        options={{ title: "Main Page", headerShown: true }}
        name={routes.MeetingsScreen}
        component={MeetingScreen}
      />
      <Stack.Screen
        options={{ title: "Create", headerShown: true }}
        name={routes.CreateMeetingScreen}
        component={CreateMeetingScreen}
      />
    </Stack.Navigator>
  );
}

export default MeetingsStack;
