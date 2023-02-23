import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

interface ITitleProps {
  children?: React.ReactNode;
};

const Title: React.FC<ITitleProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.yellowColor1,
    padding: 15,
    borderRadius: 4,
  },
  text: {
    color: Colors.yellowColor1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
});
