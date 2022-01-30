import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  }from "react-native";
import { Button, TextInput } from "react-native-paper";
import routes from "../navigation/routes";
import { WHITE_COLOR } from "../Themes/themeColors";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "../Screens/Account_Screen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';

const MainScreen = (props) => 
{
  const handleAccountPress = () => 
  {
    navigation.navigate(routes.AccountScreen);
  };
  const handleSettingsPress = () =>
  {
    navigation.navigate(routes.SettingsScreen)
  };
  
    return
    (
      <SafeAreaView style={styles.ButtonArea}> 
          <Button
            icon = "camera"
            style={styles.User_Icon}
            onPress={handleAccountPress}

          >
          
          </Button>
            
            
          <Button
            icon = "camera"
            style = {style.Setting_Icon}
            onPress = {handleSettingsPress}
          
          >
  
          </Button>
      
      <SafeAreaView style={styles.ButtonArea}>
      <SafeAreaView>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="Meetings" component={MeetingsScreen} />
          <Tab.Screen name ="On Demand" component ={OnDemandScreen} />
        </Tab.Navigator>
      </SafeAreaView>
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
    User_Icon:
    {
      justifyContent: "flex-end",
    },
    Setting_Icon:
    {
      justifyContent: "flex-start",
    },


});






export default MainScreen;