import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import { PRIMARY_COLOR, SECONDY_COLOR } from "../../Themes/themeColors";
import { Title } from 'react-native-paper';

const icon = require("../../assets/icon.png");
const LogInScreen = () => 
{
  return (
    <View style={styles.MainScreen}>
      <View style={styles.LogoArea}>
      </View>
     <View style={styles.InputArea}>
        <TextInput mode="outlined" style={styles.textInput} label="Email" />
        <TextInput mode="outlined" style={styles.textInput} label="Password" />
      </View>
      <View style={styles.ButtonArea}>
        <Checkbox mode="outlined" style={styles.Checkbox} label="Remember Me" />
        <Title mode="outlined" style={styles.Title} label="LogIn" />
        <Title mode="outlined" style={styles.Title} label="Sign Up" />
        <Checkbox mode="outlined" style={styles.Checkbox} label="Keep me signed in" />
      </View>
    </View>
  );
};

//finish loading screen, with react native paper button for login,
// add some props to the text-input so that you can tell what each input is


const styles = StyleSheet.create
({
  MainScreen: 
  {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  LogoArea: 
  {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  ButtonArea: 
  {
    flex: 2,
    backgroundColor: SECONDY_COLOR,
    justifyContent: "center",
  },
  InputArea: 
  {
    flex: 2,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
  },
  textInput: 
  {
    marginLeft: 20,
    marginRight: 20,
  },
  Checkbox:
  {
    marginLeft: 15,
    marginRight: 18,
  },
  Title:
  {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  Title_2:
  {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  Checkbox_2:
  {
    marginLeft: 18,
    marginRight: 15,
  }


});

export default LogInScreen;
