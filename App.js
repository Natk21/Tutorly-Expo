import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AuthStack from "./navigation/authStack";
import MainStack from "./navigation/mainStack";

export default function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <NavigationContainer
      onReady={() => {}}
      onStateChange={async () => {}}
      //theme={}
    >
      <PaperProvider>
        {authToken ? <></> : <AuthStack setAuthToken={setAuthToken} />}
      </PaperProvider>
    </NavigationContainer>
  );
}
{authToken ? <MainStack setAuthToken={setAuthToken} />: <AuthStack setAuthToken={setAuthToken} />}
