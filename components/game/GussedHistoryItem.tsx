import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

interface IGuessedHistoryItemProps {
  round: number;
  number: string;
}

const GuessedHistoryItem: React.FC<IGuessedHistoryItemProps> = ({
  round,
  number,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{round}</Text>
      <Text style={styles.text}>Opponent`s guessed {number}</Text>
    </View>
  );
};

export default GuessedHistoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellowColor1,
    borderColor: Colors.plumColor3,
    borderWidth: 2,
    borderRadius: 10,
    margin: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: Colors.plumColor3,
  },
});
