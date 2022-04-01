import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AuthStack from "./navigation/authStack";
import MainTabStack from "./navigation/mainTabStack";

export default function App() {
  const [authToken, setAuthToken] = React.useState("adfasd");

  return (
    <NavigationContainer
      onReady={() => {}}
      onStateChange={async () => {}}
      //theme={}
    >
      <PaperProvider>
        {authToken ? (
          <MainTabStack setAuthToken={setAuthToken} />
        ) : (
          <AuthStack setAuthToken={setAuthToken} />
        )}
      </PaperProvider>
    </NavigationContainer>
  );
}
