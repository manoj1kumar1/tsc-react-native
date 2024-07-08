import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Step1 from "./screens/Step1";
import Step2 from "./screens/Step2";
import Step3 from "./screens/Step3";

const Stack = createNativeStackNavigator();
const AuthRouter = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
      </Stack.Navigator>
    );
};

const RootRouter = () => {
    return <AuthRouter />
}

export default React.FC = () => {
    return (
        <NavigationContainer>
            <RootRouter />
        </NavigationContainer>
    );
};