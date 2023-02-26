import { View, Image, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/common/PrimaryButton";

import Title from "../components/common/Title";
import Container from "../components/common/Container";

import Colors from "../constants/Colors";

interface IGameOverScreenProps {
  rounds: number;
  number: number;
  onStartNewGame: () => void;
  smallHeight: boolean;
}

const GameOverScreen: React.FC<IGameOverScreenProps> = ({
  rounds,
  number,
  onStartNewGame,
  smallHeight,
}) => {
  const imageSize = smallHeight ? 100 : 300;
  const imageStyle = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <Container smallHeight={smallHeight} scrollable={true}>
      <View style={styles.wrapper}>
        <Title> Game Over </Title>
        <View style={[styles.imageWrapper, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.resultText}>
          Your opponents needed
          <Text style={styles.highlighted}> {rounds} </Text>
          to guess
          <Text style={styles.highlighted}> {number} </Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}> Start new Game </PrimaryButton>
      </View>
    </Container>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  imageWrapper: {
    overflow: "hidden",
    borderWidth: 4,
    borderColor: Colors.plumColor3,
    marginTop: 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    fontFamily: "open-sans",
    color: "black",
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
  highlighted: {
    fontFamily: "open-sans-bold",
    color: Colors.yellowColor1,
  },
});
