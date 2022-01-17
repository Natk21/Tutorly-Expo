import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { WHITE_COLOR } from "../Themes/themeColors";

const SignUpScreen = (props) => {
  const { setAuthToken } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleForgotPasswordPress = () => console.log("Button Pressed"); //this is just the layout for function
  console.log(Dimensions.get("screen"));
  const icon = require("../assets/icon.png");
  return (
    <View style={styles.MainScreen}>
      <View style={styles.InputArea}>
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          label="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <Text>Password or Username is wrong! </Text>

        <Button
          icon="camera"
          mode="contained"
          disabled={email.length === 0 || password.length === 0}
          onPress={() => {}}
          style={styles.Button}
          contentStyle={styles.ButtonContent}
        >
          Log In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
    backgroundColor: "#ffff",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  LogoArea: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  Button: {
    height: 75,
    margin: 0,
    padding: 0,
    justifyContent: "center",
  },
  ButtonContent: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  InputArea: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    justifyContent: "center",
    backgroundColor: "green",
  },
  textInput: {
    alignContent: "center",
    marginLeft: 10,
    marginRight: 10,
    top: -70,
    height: 70,
    backgroundColor: "yellow",
  },
});

export default SignUpScreen;
