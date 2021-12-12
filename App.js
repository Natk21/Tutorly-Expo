import React, { useState } from "react";
import { StyleSheet } from "react-native";
import LogInScreen from "./Components/Screens/Login_Screen";

export default function App() {
  const [authToken, setAuthToken] = useState(undefined);

  return <LogInScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
