// LoginScreen.tsx
import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { login } from "../services/authService";
import LoginForm from "../components/LoginForm";

interface Props {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const handleLogin = async (username: string, password: string) => {
    const success = await login(username, password);
    if (success) {
      // Store authentication token securely 
      navigation.navigate("ArticleCreation");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
