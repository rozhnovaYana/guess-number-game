import { useEffect, useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "../components/common/PrimaryButton";

import Title from "../components/common/Title";
import GuessedNumber from "../components/game/GuessedNumber";

interface IGameScreenProps {
  enteredNumber: number;
  onGameOver: () => void;
}

const randomNumberGenerator = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min)) + min;
};

const GameScreen: React.FC<IGameScreenProps> = ({
  enteredNumber,
  onGameOver,
}) => {
  const min = useRef(1);
  const max = useRef(100);

  const [guessedNumber, setNumber] = useState<number>(
    randomNumberGenerator(1, 100)
  );

  useEffect(() => {
    if (enteredNumber === guessedNumber) {
      onGameOver();
    }
  }, [enteredNumber, guessedNumber, onGameOver]);

  const correctNumber = (direction: "greater" | "lower") => {
    if (direction === "greater") {
      min.current = guessedNumber;
    } else if (direction === "lower") {
      max.current = guessedNumber;
    }

    console.log("min" + min.current);
    console.log("max" + max.current);

    setNumber(randomNumberGenerator(min.current, max.current));
  };

  return (
    <View style={styles.container}>
      <Title> Opponent`s` Guess </Title>
      <View>
        <GuessedNumber>{guessedNumber}</GuessedNumber>
        <View>
          <PrimaryButton onPress={() => correctNumber("greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => correctNumber("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 100,
  },
});
