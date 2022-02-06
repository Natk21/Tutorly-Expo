import React from "react";
import { StyleSheet,Text,Button,  } from "react-native";
import routes from "../navigation/routes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import User from "./Profile";
import AccountScreen from "./Account_Screen";


const Tab = createBottomTabNavigator();

const MainScreen = (props) => 
{
  
  const handleSettingsPress = () => {
    navigation.navigate(routes.SettingsScreen);
  };

   return
   (

    <Button
      icon = "widget"
      style = {style.Setting_Icon}
      onPress = {handleSettingsPress}

    >

    </Button>

    <Tab.Navigator
      initialRouteName= "Feed"
    
    >
    <Tab.Screen 
      name="Home" 
      component={MainScreen} 
      options = 
      {{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => 
        (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
    name = "Meetings"
    component={MeetingsScreen}
    options = 
    {{
      tabBarLabel: 'Meetings',
      tabBarIcon: ({ color, size }) => 
        (
          <MaterialCommunityIcons name= "Laptop" color={color} size={size} />
        ),

    }}
    
    />
    <Tab.Screen
      name = "Profile"
      component = {AccountScreen}
      options = 
      {{
        tabBarLabel: Profile,
        tabBarIcon: ({ color, size }) =>
        (
          <MaterialCommunityIcons name = "torso" color = {color} size = {size} />
        )
      }}
    
    />
    
    </Tab.Navigator>


       <Tab.Screen name="Meetings" component={MeetingsScreen} />
         <Tab.Screen name ="On Demand" component ={OnDemandScreen} />

  );   
};

const styles = StyleSheet.create
({
  ButtonArea: 
  {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Setting_Icon: 
  {
    justifyContent: "flex-start",
  },

});

export default MainScreen;
