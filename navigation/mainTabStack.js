import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CreateStack from "./createStack";
import HomeStack from "./homeStack";
import routes from "./routes";
import SearchStack from "./searchStack";

const Tab = createBottomTabNavigator();

function MainTabStack(props) {
  const { setAuthToken } = props;

  return (
    <Tab.Navigator initialRouteName={routes.MainStack}>
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
        name={routes.CreateStack}
        component={CreateStack}
        options={{
          tabBarLabel: "Create",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.SearchStack}
        component={SearchStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wifi" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabStack;
