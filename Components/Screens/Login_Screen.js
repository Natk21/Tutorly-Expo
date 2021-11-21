import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { PRIMARY_COLOR, SECONDY_COLOR } from "../../Themes/themeColors";

const icon = require("../../assets/icon.png");
const LogInScreen = () => {
  return (
    <View style={styles.MainScreen}>
      <View style={styles.LogoArea}>
        <Image style={styles.logo} source={icon} />
      </View>
      <View style={styles.ButtonArea}>
        <TextInput mode="outlined" style={styles.textInput} label="Email" />
      </View>
    </View>
  );
};

//finish loading screen, with react native paper button for login,
// add some props to the text-input so that you can tell what each input is

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
    backgroundColor: "#8B008B",
  },
  LogoArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  ButtonArea: {
    flex: 2,
    backgroundColor: SECONDY_COLOR,
    justifyContent: "center",
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
  },
  logo: {
    height: 75,
    width: 75,
  },
});

export default LogInScreen;
