import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AuthStack from "./navigation/authStack";
export default function App() {
  const [authToken, setAuthToken] = useState(undefined);
  console.log("App executed");

  return (
    <NavigationContainer
      onReady={() => {}}
      onStateChange={async () => {}}
      //theme={}
    >
      <PaperProvider>
        <AuthStack />
      </PaperProvider>
    </NavigationContainer>
  );
}
