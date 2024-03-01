import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../types/navigation";

// props types for the ArticleViewScreen component
type ArticleViewScreenRouteProp = RouteProp<RootStackParamList, "ArticleView">;
type ArticleViewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ArticleView"
>;

interface ArticleViewScreenProps {
  route: ArticleViewScreenRouteProp;
  navigation: ArticleViewScreenNavigationProp;
}

const ArticleViewScreen: React.FC<ArticleViewScreenProps> = ({ route }) => {
  const { article } = route.params ?? { article: undefined };

  if (!article) {
    return (
      <View>
        <Text>No article found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Title: {article.title}</Text>
      <Text>Content: {article.content}</Text>
      <Text>Category: {article.category}</Text>
    </View>
  );
};

export default ArticleViewScreen;
