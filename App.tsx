import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screen components
import LoginScreen from "./src/screens/LoginScreen";
import ArticleCreationScreen from "./src/screens/ArticleCreationScreen";
import ArticleViewScreen from "./src/screens/ArticleViewScreen";

// Create a stack navigator
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="ArticleCreation"
          component={ArticleCreationScreen}
          options={{ title: "Create Article" }}
        />
        <Stack.Screen
          name="ArticleView"
          component={ArticleViewScreen}
          options={({ route }) => ({ title: route.params.article.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
