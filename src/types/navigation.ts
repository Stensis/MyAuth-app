import { StackNavigationProp } from "@react-navigation/stack";
import Article from "./Article";

// Define the navigation parameters
type RootStackParamList = {
  Login: undefined;
  ArticleCreation: undefined;
  // Define the article parameter
  ArticleView: { article?: Article };
};

// Define the type for the navigation prop
export type NavigationStackProp = StackNavigationProp<RootStackParamList>;
export default RootStackParamList;
