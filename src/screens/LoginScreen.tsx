import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { NavigationProp } from "@react-navigation/native"; 
import { login } from "../services/authService";

interface Props {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Check if username and password are not empty
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter both username and password");
      return;
    }

    const success = await login(username, password);
    if (success) {
      // Store authentication token securely (e.g., AsyncStorage)
      // Navigation to the next screen
      navigation.navigate("ArticleCreation");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
