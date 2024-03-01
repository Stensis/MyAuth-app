import AsyncStorage from "@react-native-async-storage/async-storage";
import Article from "../types/Article";

const KEY_ARTICLES = "articles";

export const createArticle = async (articleData: Article): Promise<void> => {
  const articlesString = await AsyncStorage.getItem(KEY_ARTICLES);
  let articles: Article[] = [];
  if (articlesString) {
    articles = JSON.parse(articlesString);
  }
  articles.push(articleData);
  await AsyncStorage.setItem(KEY_ARTICLES, JSON.stringify(articles));
};

export const getArticles = async (): Promise<Article[]> => {
  const articlesString = await AsyncStorage.getItem(KEY_ARTICLES);
  if (articlesString) {
    return JSON.parse(articlesString);
  }
  return [];
};
