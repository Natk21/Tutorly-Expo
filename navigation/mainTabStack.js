import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CoursesStack from "./coursesStack";
import HomeStack from "./homeStack";
import MeetingsStack from "./meetingsStack";
import ProfileStack from "./profileStack";
import routes from "./routes";

const Tab = createBottomTabNavigator();

function MainTabStack(props) {
  const { setAuthToken } = props;
  const [x, setX] = React.useState(0);
  return (
    <Tab.Navigator initialRouteName={routes.HomeStack}>
      <Tab.Screen
        name={routes.HomeStack}
        component={HomeStack}
        options={{
          tabBarLabel: "Main",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ProfileStack}
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MeetingsStack}
        component={MeetingsStack}
        options={{
          tabBarLabel: "Meetings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wifi" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.CoursesStack}
        component={CoursesStack}
        options={{
          tabBarLabel: "Learn",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wifi" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabStack;
