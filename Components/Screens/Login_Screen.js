import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { PRIMARY_COLOR, WHITE_COLOR } from "../../Themes/themeColors";

const icon = require("../../assets/icon.png");
const LogInScreen = (props) => {
  const { setAuthToken } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.MainScreen}>
      <View style={styles.LogoArea}></View>
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
      </View>
      <View style={styles.ButtonArea}>
        <Button
          icon="camera"
          mode="contained"
          disabled={email.length === 0 || password.length === 0}
          onPress={() => {}}
          style={styles.Button}
        >
          Log In
        </Button>
      </View>
    </View>
  );
};

//finish loading screen, with react native paper button for login,
// add some props to the text-input so that you can tell what each input is

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  LogoArea: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  ButtonArea: {
    flex: 0.5,
    backgroundColor: WHITE_COLOR,
    justifyContent: "center",
  },
  InputArea: {
    flex: 0.5,
    backgroundColor: WHITE_COLOR,
    justifyContent: "center",
  },
  textInput: {
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  Checkbox: {
    marginLeft: 15,
    marginRight: 18,
  },
  Button: {
    height: 50,
  },

  Checkbox_2: {
    marginLeft: 18,
    marginRight: 15,
  },
});

export default LogInScreen;
