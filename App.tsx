import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./constants/Colors";

const App = () => {
  const [enteredNumber, setEnteredNumber] = useState<number | undefined>();
  const [isGameOver, setGameOver] = useState<boolean>(false);

  const onEnterNumber = (number: number) => {
    setEnteredNumber(number);
  };

  const onGameOver = useCallback(() => setGameOver(true), []);

  let content: JSX.Element;

  if (isGameOver) {
    content = <GameOverScreen />;
  } else if (enteredNumber) {
    content = (
      <GameScreen enteredNumber={enteredNumber} onGameOver={onGameOver} />
    );
  } else {
    content = <HomeScreen onEnterNumber={onEnterNumber} />;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.container}
        colors={[Colors.plumColor1, Colors.yellowColor1]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
          style={styles.container}
        >
          <SafeAreaView style={styles.container}>{content}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    opacity: 0.15,
  },
  container: {
    flex: 1,
  },
});

export default App;
