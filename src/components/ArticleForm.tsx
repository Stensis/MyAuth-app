import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
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
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={setContent}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ArticleForm;
