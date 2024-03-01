import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import ArticleCreationScreen from './src/screens/ArticleCreationScreen';
import ArticleViewScreen from './src/screens/ArticleViewScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ArticleCreation" component={ArticleCreationScreen} />
        <Stack.Screen name="ArticleView" component={ArticleViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
