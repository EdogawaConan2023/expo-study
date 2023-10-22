import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen';
import CreateAccountScreen from './screen/createAccountScreen';

const Stack = createStackNavigator();

const { NavigationContainer } = require("@react-navigation/native")

const AppNavigator = () => {
    return (
        <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
      {/* <BottomTabNaigator></BottomTabNaigator> */}
    </NavigationContainer>
    )
}

export const TabsNavigator = () => {
    return (
        <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
      {/* <BottomTabNaigator></BottomTabNaigator> */}
    </NavigationContainer>
    )
}

export default {AppNavigator, TabsNavigator};