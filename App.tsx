import "react-native-gesture-handler";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Signin from "./screens/auth/signin";
import Users from "./screens/users/users";
import { Provider } from "react-redux";
import store from "./redux/store";
import { StackType } from "./redux/features/interface";

const Stack = createStackNavigator<StackType>();

SplashScreen.preventAutoHideAsync();

const screenOptions = {
  headerShown: false,
};

function Stacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Satoshi-Black": require("./assets/fonts/satoshi-cdnfonts/Satoshi-Black.otf"),
    "Satoshi-Bold": require("./assets/fonts/satoshi-cdnfonts/Satoshi-Bold.otf"),
    "Satoshi-Light": require("./assets/fonts/satoshi-cdnfonts/Satoshi-Light.otf"),
    "Satoshi-Medium": require("./assets/fonts/satoshi-cdnfonts/Satoshi-Medium.otf"),
    "Satoshi-Regular": require("./assets/fonts/satoshi-cdnfonts/Satoshi-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <StatusBar style="auto" />
      <Provider store={store}>
        <Stacks />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
