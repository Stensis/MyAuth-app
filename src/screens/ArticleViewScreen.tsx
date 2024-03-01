import React, { useState, useEffect } from "react";
import { View, TextInput, Text, ScrollView, StyleSheet } from "react-native";
import { getArticles } from "../services/articleService";
import Article from "../types/Article";

const ArticleViewScreen: React.FC = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [searchCategory, articles]);

  const fetchArticles = async () => {
    try {
      const fetchedArticles = await getArticles();
      setArticles(fetchedArticles.reverse());
      setFilteredArticles(fetchedArticles); // Initialize filteredArticles with all articles
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const filterArticles = () => {
    let filtered = articles;

    if (searchCategory.trim() !== "") {
      filtered = filtered.filter((article) =>
        article.category.toLowerCase().includes(searchCategory.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by category"
        value={searchCategory}
        onChangeText={setSearchCategory}
      />

      <Text style={styles.heading}>Articles:</Text>
      {filteredArticles.map((article) => (
        <View style={styles.articleContainer} key={article.id}>
          <Text style={styles.articleTitle}>Title: {article.title}</Text>
          <Text>Content: {article.content}</Text>
          <Text>Category: {article.category}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  input: {
    width: "90%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  articleContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default ArticleViewScreen;
