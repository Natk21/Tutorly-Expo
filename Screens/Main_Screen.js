import React from "react";
import { StyleSheet } from "react-native";
import routes from "../navigation/routes";

const MainScreen = (props) => {
  const handleAccountPress = () => {
    navigation.navigate(routes.AccountScreen);
  };
  const handleSettingsPress = () => {
    navigation.navigate(routes.SettingsScreen);
  };

  return <></>;

  // return
  // (

  //       <Button
  //         icon = "camera"
  //         style={styles.User_Icon}
  //         onPress={handleAccountPress}

  //       >

  //       </Button>

  //       <Button
  //         icon = "camera"
  //         style = {style.Setting_Icon}
  //         onPress = {handleSettingsPress}

  //       >

  //       </Button>

  //     <Tab.Navigator>
  //       <Tab.Screen name="Home" component={MainScreen} />
  //       <Tab.Screen name="Meetings" component={MeetingsScreen} />
  //       <Tab.Screen name ="On Demand" component ={OnDemandScreen} />
  //     </Tab.Navigator>
};

const styles = StyleSheet.create({
  ButtonArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  User_Icon: {
    justifyContent: "flex-end",
  },
  Setting_Icon: {
    justifyContent: "flex-start",
  },
});

export default MainScreen;
