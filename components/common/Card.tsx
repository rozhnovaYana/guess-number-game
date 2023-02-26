import { View, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

interface ICardProps {
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.plumColor3,
    marginTop: 20,
    alignItems: "center",
    padding: 30,
    elevation: 5,
  },
});
