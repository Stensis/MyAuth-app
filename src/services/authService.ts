import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../types/User";
const KEY_TOKEN = "auth_token";

// Define the key used to store user data in AsyncStorage
const KEY_USERS = "users";

export const login = async (
  username: string,
  password: string
): Promise<boolean> => {
  // Simulate login with dummy data 
  const userString = await AsyncStorage.getItem(KEY_USERS);
  const users: User[] = JSON.parse(userString || "[]");

  // Check if the password is unique among existing users
  const isUniquePassword = users.every((user) => user.password !== password);

  if (!isUniquePassword) {
    // Handle the case where the password is not unique
    return false;
  }

  // Continue with login process if the password is unique
  const user: User = { username, password, token: "fake_token" };

  // Log the generated token
  console.log("Generated Token:", user.token);

  // Storing user object with token in AsyncStorage
  await AsyncStorage.setItem(KEY_TOKEN, JSON.stringify(user));

  // Returning true to indicate successful login
  return true;
};


export const logout = async (): Promise<void> => {
  await AsyncStorage.removeItem(KEY_TOKEN);
};

export const getAuthToken = async (): Promise<string | null> => {
  const userString = await AsyncStorage.getItem(KEY_TOKEN);
  const user: User | undefined = JSON.parse(userString || "null");
  return user?.token ?? null;
};

const checkAuthToken = async () => {
  try {
    // Retrieve the authentication token from AsyncStorage
    const authToken = await AsyncStorage.getItem(KEY_TOKEN);
    
    // Log the authentication token to the console
    console.log("Authentication Token:", authToken);
  } catch (error) {
    console.error("Error retrieving authentication token:", error);
  }
};

// Call the function to check the authentication token
checkAuthToken();