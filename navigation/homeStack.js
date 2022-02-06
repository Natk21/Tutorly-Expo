//create a new stack called mainStack
//best way to do this is to copy your authStack file, change the name, and remove all the stack screens that do not belong in the mainstack,
//also you should remove the screen from the authStack that belong stacks..
//essentailly your authStack, should be left with only screens that belong to it, aka signup, signin, forgot... and this stack will hold all of the other screens...
// then you want go to app.js, and change the <></> to <MainStack />, the other component in the turniary operator.
//set the intial route on the main stack to be what screen is first...
// and the idea when you load the app, the auth stack should run, when you login, the main stack should switch to , and you see your intial screen... what ever you choose it be...

//work on the screens that do currently..

//for next figure your home screen, like what it should hold, bonus is if you can point to the components from paper.lib

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

/* <Stack.Screen
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
/> */
