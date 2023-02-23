import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/common/PrimaryButton";
import Colors from "../constants/Colors";

interface IHomeScreenProps {
  onEnterNumber: (number: number) => void;
}
const HomeScreen: React.FC<IHomeScreenProps> = ({ onEnterNumber }) => {
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
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.plumColor3,
    marginTop: 150,
    marginHorizontal: 20,
    alignItems: "center",
    padding: 30,
    borderRadius: 20,
    elevation: 5,
  },
  textInput: {
    width: 50,
    borderBottomColor: Colors.yellowColor1,
    borderBottomWidth: 2,
    color: Colors.yellowColor1,
    fontSize: 25,
    textAlign: "center",
  },
  buttonsWrapper: {
    flexDirection: "row",
    marginTop: 15,
  },
  buttonWrapper: {
    marginHorizontal: 5,
    flex: 1,
  },
});

export default HomeScreen;
