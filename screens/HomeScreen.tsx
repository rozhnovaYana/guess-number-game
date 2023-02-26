import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import PrimaryButton from "../components/common/PrimaryButton";
import Card from "../components/common/Card";
import Colors from "../constants/Colors";
import Title from "../components/common/Title";
import Container from "../components/common/Container";

interface IHomeScreenProps {
  onEnterNumber: (number: number) => void;
  smallHeight: boolean;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({
  onEnterNumber,
  smallHeight,
}) => {
  const [value, setValue] = useState<string>("");

  const resetValue = () => setValue("");

  const onChangeText = (text: string) => setValue(text);
  const onSubmit = () => {
    const number = parseInt(value);

    if (isNaN(number) || number > 99 || number < 1) {
      Alert.alert(
        "Invalid number",
        "Number should be less than 100 and more than 0",
        [
          {
            text: "Reset",
            onPress: resetValue,
            style: "destructive",
          },
        ]
      );
      return;
    }
    onEnterNumber(number);
  };

  return (
    <Container scrollable={true} smallHeight={smallHeight}>
      <KeyboardAvoidingView behavior="position" style={styles.wrapper}>
        <Title>Guess Number</Title>
        <Card>
          <Text style={styles.title}> Enter number, please </Text>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            value={value}
            onChangeText={onChangeText}
          />
          <View style={styles.buttonsWrapper}>
            <View style={styles.buttonWrapper}>
              <PrimaryButton onPress={resetValue}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonWrapper}>
              <PrimaryButton onPress={onSubmit}>Play</PrimaryButton>
            </View>
          </View>
        </Card>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  textInput: {
    width: 50,
    borderBottomColor: Colors.yellowColor1,
    borderBottomWidth: 2,
    color: Colors.yellowColor1,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "open-sans",
    marginTop: 25,
  },
  buttonsWrapper: {
    flexDirection: "row",
    marginTop: 15,
  },
  buttonWrapper: {
    marginHorizontal: 5,
    flex: 1,
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: Colors.yellowColor1,
  },
});

export default HomeScreen;
