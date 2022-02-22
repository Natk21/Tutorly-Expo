import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPasswordScreen from "../Screens/ForgotPassword_Screen";
import LogInScreen from "../Screens/Login_Screen";
import SignUpScreen from "../Screens/SignUp_Screen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  const { setAuthToken } = props;

  return (
    <Stack.Navigator initialRouteName={routes.Login}>
      <Stack.Screen name={routes.Login} options={{ headerShown: false }}>
        {(props) => <LogInScreen setAuthToken={setAuthToken} {...props} />}
      </Stack.Screen>

      <Stack.Screen
        options={{ title: "Sign Up", headerShown: true }}
        name={routes.Signup}
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{ title: "Forgot Password", headerShown: true }}
        name={routes.Forgot}
        component={ForgotPasswordScreen}
      />
      {}
    </Stack.Navigator>
  );
}

export default AuthStack;
