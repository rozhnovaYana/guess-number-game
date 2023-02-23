import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

interface IGuessedNumberProps {
  children: React.ReactNode;
}

const GuessedNumber: React.FC<IGuessedNumberProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellowColor1,
    padding: 20,
    margin: 14,
  },
  text: {
    fontSize: 36,
    color: Colors.yellowColor1,
    fontWeight: "bold",
  },
});

export default GuessedNumber;
