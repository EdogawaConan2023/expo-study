import React from "react";
import LoginScreen from "./screen/login";
import CreateAccountScreen from "./screen/createAccountScreen";
import HomePage from "./screen/homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNaigator from "./screen/view/TabNavigator";
import AppNavigator from "./AppNavigator";
import TabNavigator from "./screen/view/TabNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="HomePage" component={TabNavigator} />
      </Stack.Navigator>
      {/* <BottomTabNaigator></BottomTabNaigator> */}
    </NavigationContainer>
  );
};

export default App;
