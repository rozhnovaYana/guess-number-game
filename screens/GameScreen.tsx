import { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import PrimaryButton from "../components/common/PrimaryButton";
import Title from "../components/common/Title";
import Card from "../components/common/Card";
import GuessedNumber from "../components/game/GuessedNumber";
import Colors from "../constants/Colors";
import GuessedHistoryItem from "../components/game/GussedHistoryItem";
import Container from "../components/common/Container";

interface IGameScreenProps {
  enteredNumber: number;
  onGameOver: (guesedRounds: number) => void;
  smallHeight: boolean;
}

const randomNumberGenerator = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

const GameScreen: React.FC<IGameScreenProps> = ({
  enteredNumber,
  onGameOver,
  smallHeight,
}) => {
  const min = useRef(1);
  const max = useRef(100);

  const [guessedNumber, setNumber] = useState<number>(
    randomNumberGenerator(1, 100)
  );
  const [guessedHistory, setGuessedHistory] = useState([
    guessedNumber?.toString(),
  ]);

  useEffect(() => {
    if (enteredNumber === guessedNumber) {
      onGameOver(guessedHistory.length);
    }
  }, [enteredNumber, guessedNumber, onGameOver]);

  const correctNumber = (direction: "greater" | "lower") => {
    if (
      (direction === "lower" && guessedNumber < enteredNumber) ||
      (direction === "greater" && guessedNumber > enteredNumber)
    ) {
      Alert.alert("I know that you lie", "Please, don`t lie me!", [
        { text: "Enter Number", style: "cancel" },
      ]);
      return;
    }

    if (direction === "greater") {
      min.current = guessedNumber + 1;
    } else if (direction === "lower") {
      max.current = guessedNumber;
    }

    const updatedNumber = randomNumberGenerator(min.current, max.current);

    setNumber(updatedNumber);
    setGuessedHistory((history) => [updatedNumber?.toString(), ...history]);
  };

  let content = (
    <>
      <Title> Opponent`s Guess </Title>
      <Card>
        <Text style={styles.title}> Is your number lower or highter? </Text>
        <GuessedNumber>{guessedNumber}</GuessedNumber>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => correctNumber("lower")}>
              <Ionicons name="remove-circle-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => correctNumber("greater")}>
              <Ionicons name="add-circle-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList
          data={guessedHistory}
          keyExtractor={(item: string) => item}
          renderItem={({ item, index }) => (
            <GuessedHistoryItem
              round={guessedHistory.length - index}
              number={item}
            />
          )}
        />
      </View>
    </>
  );

  if (smallHeight) {
    content = (
      <>
        <Card>
          <Text style={styles.title}> Is your number lower or highter? </Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => correctNumber("lower")}>
                <Ionicons
                  name="remove-circle-outline"
                  size={24}
                  color="white"
                />
              </PrimaryButton>
            </View>
            <GuessedNumber>{guessedNumber}</GuessedNumber>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => correctNumber("greater")}>
                <Ionicons name="add-circle-outline" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.container}>
          <FlatList
            data={guessedHistory}
            keyExtractor={(item: string) => item}
            renderItem={({ item, index }) => (
              <GuessedHistoryItem
                round={guessedHistory.length - index}
                number={item}
              />
            )}
          />
        </View>
      </>
    );
  }

  return (
    <Container smallHeight={smallHeight} scrollable={false}>
      {content}
    </Container>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: Colors.yellowColor1,
  },
});
