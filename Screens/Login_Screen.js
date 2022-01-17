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
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import routes from "../navigation/routes";
import { WHITE_COLOR } from "../Themes/themeColors";

const icon = require("../assets/icon.png");
const LogInScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleForgotPasswordPress = () => {
    console.log("Button Pressed");
  }; //change this to be navigate(routes.ForgotPassword..), see below in handeRegButtonFunction

  const handleRegButton = () => {
    navigation.navigate(routes.SIGNUP);
  }; //this is just the layout for function

  console.log(Dimensions.get("screen"));

  return (
    <View style={styles.MainScreen}>
      <SafeAreaView style={styles.LogoArea}>
        <Text>Welcome Back</Text>

        <Image
          source={{
            width: 250,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </SafeAreaView>

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
        <Button
          onPress={handleRegButton} //make this appear
        >
          Register
        </Button>
        <Button
          onPress={handleForgotPasswordPress} //make this appear
        >
          Forgot Password?
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
    height: 50,
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

export default LogInScreen;
