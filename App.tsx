import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  useWindowDimensions,
} from "react-native";
import { useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./constants/Colors";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [enteredNumber, setEnteredNumber] = useState<number>(0);
  const [isGameOver, setGameOver] = useState<boolean>(false);
  const [rounds, setRounds] = useState(0);
  const { height } = useWindowDimensions();

  const smallHeight = height < 400;

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onEnterNumber = (number: number) => {
    setEnteredNumber(number);
  };

  const onGameOver = useCallback((guesedRounds: number) => {
    setGameOver(true);
    setRounds(guesedRounds);
  }, []);

  const startNewGame = () => {
    setGameOver(false);
    setEnteredNumber(0);
  };

  let content: JSX.Element;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (isGameOver) {
    content = (
      <GameOverScreen
        rounds={rounds}
        number={enteredNumber}
        onStartNewGame={startNewGame}
        smallHeight={smallHeight}
      />
    );
  } else if (enteredNumber) {
    content = (
      <GameScreen
        enteredNumber={enteredNumber}
        onGameOver={onGameOver}
        smallHeight={smallHeight}
      />
    );
  } else {
    content = (
      <HomeScreen onEnterNumber={onEnterNumber} smallHeight={smallHeight} />
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
          <SafeAreaView style={styles.container}>
            <View style={[styles.container, styles.contentWrapper]}>
              {content}
            </View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    opacity: 0.15,
  },
  container: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 20,
  },
});

export default App;
