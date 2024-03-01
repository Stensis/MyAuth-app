import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { createArticle, getArticles } from "../services/articleService";
import Article from "../types/Article";

const ArticleCreationScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Fetch articles when the component mounts
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const fetchedArticles = await getArticles();
      // Reverse the order of articles
      setArticles(fetchedArticles.reverse());
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleCreateArticle = async () => {
    // Assuming userId is 1 for simplicity
    const articleData = { id: 0, title, content, category, userId: 1 };
    try {
      await createArticle(articleData);
      // After creating the article, fetch the updated list of articles
      fetchArticles();
      // Reset form fields
      setTitle("");
      setContent("");
      setCategory("");
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Content" value={content} onChangeText={setContent} />
      <TextInput placeholder="Category" value={category} onChangeText={setCategory} />
      <Button title="Create Article" onPress={handleCreateArticle} />
      {/* Display the list of articles */}
      <Text>Articles:</Text>
      {articles.map((article) => (
        <View key={article.id}>
          <Text>Title: {article.title}</Text>
          <Text>Content: {article.content}</Text>
          <Text>Category: {article.category}</Text>
          {/* Display other article details as needed */}
        </View>
      ))}
    </View>
  );
};

export default ArticleCreationScreen;
