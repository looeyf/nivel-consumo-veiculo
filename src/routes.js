import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Homepage from "./pages/Homepage";

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{
            headerTitleAlign: "center",
            title: "Calcular KM/L",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
