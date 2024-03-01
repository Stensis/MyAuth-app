import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Article from "../types/Article";

interface ArticleFormProps {
  onSubmit: (article: Article) => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    const newArticle: Article = {
      id: Date.now(),
      title,
      content,
      category,
      userId: 1
    };
    onSubmit(newArticle);
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default ArticleForm;
