import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import LogInScreen from "./Components/Screens/Login_Screen";

export default function App() {
  const [authToken, setAuthToken] = useState(undefined);
  console.log("App executed");

  return <LogInScreen />;
}


