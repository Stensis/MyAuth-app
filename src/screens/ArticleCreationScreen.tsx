import React, { useState, useEffect } from "react";
import { View, TextInput, Text, ScrollView, StyleSheet } from "react-native";
import { createArticle, getArticles } from "../services/articleService";
import Article from "../types/Article";
import CustomButton from "../components/CustomButton"; // Import your custom button component
import RNPickerSelect from "react-native-picker-select"; // Import Picker from 'react-native-picker-select'

const ArticleCreationScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [searchCategory, setSearchCategory] = useState(""); // State for search input
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]); // State to hold filtered articles

  useEffect(() => {
    // Fetch articles when the component mounts
    fetchArticles();
  }, []);

  useEffect(() => {
    // Filter articles whenever category or search category changes
    filterArticles();
  }, [category, searchCategory]);

  const fetchArticles = async () => {
    try {
      const fetchedArticles = await getArticles();
      // Reverse the order of articles
      setArticles(fetchedArticles.reverse());
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const filterArticles = () => {
    let filtered = articles;

    // Filter articles based on selected category
    if (category.trim() !== "") {
      filtered = filtered.filter((article) => article.category === category);
    }

    // Filter articles based on search category
    if (searchCategory.trim() !== "") {
      filtered = filtered.filter((article) =>
        article.category.toLowerCase().includes(searchCategory.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  };

  const handleCreateArticle = async () => {
    if (!title.trim()) {
      setTitleError("Article title is required");
      return;
    }
    if (!content.trim()) {
      setContentError("Article content is required");
      return;
    }
    if (!category.trim()) {
      setCategoryError("Article category is required");
      return;
    }

    // Assuming userId is 1 for simplicity
    const articleData = { id: 0, title, content, category, userId: 1 };
    try {
      await createArticle(articleData);
      // After creating the article, fetch the updated list of articles
      fetchArticles();
      // Reset form fields and errors
      setTitle("");
      setContent("");
      setCategory("");
      setTitleError("");
      setContentError("");
      setCategoryError("");
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      {titleError ? <Text style={styles.error}>{titleError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      {contentError ? <Text style={styles.error}>{contentError}</Text> : null}
      <View style={styles.input}>
        <RNPickerSelect
          onValueChange={(value) => setCategory(value)}
          items={[
            { label: "Technology", value: "Technology" },
            { label: "Science", value: "Science" },
            { label: "Health", value: "Health" },
            { label: "Business", value: "Business" },
            { label: "Education", value: "Education" }
          ]}
          placeholder={{
            label: "Select a category...",
            value: null
          }}
        />
      </View>
      <CustomButton title="Create Article" onPress={handleCreateArticle} />
      <View style={styles.searchInput}>
        <TextInput
          style={styles.input}
          placeholder="Search by category"
          value={searchCategory}
          onChangeText={setSearchCategory}
        />
      </View>

      {/* Display the list of articles */}
      <Text style={styles.heading}>Articles:</Text>
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <View style={styles.articleContainer} key={article.id}>
            <Text style={styles.articleTitle}>Title: {article.title}</Text>
            <Text>Content: {article.content}</Text>
            <Text>Category: {article.category}</Text>
            {/* Display other article details as needed */}
          </View>
        ))
      ) : (
        <Text>No articles found for the selected category.</Text>
      )}
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
  searchInput: {
    marginTop: 10,
    paddingHorizontal: 20,
    width: "100%"
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
  },
  error: {
    color: "red",
    marginBottom: 5
  }
});

export default ArticleCreationScreen;
