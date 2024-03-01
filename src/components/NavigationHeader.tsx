import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NavigationHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Navigation Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    paddingTop: 15
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});

export default NavigationHeader;
