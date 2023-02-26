import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";

interface IPrimaryButtonProps {
  children?: React.ReactNode;
  onPress?: () => void
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonWrapperOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonWrapperInner, styles.pressed]
            : styles.buttonWrapperInner
        }
        android_ripple={{ color: Colors.plumColor2 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapperOuter: {
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  buttonWrapperInner: {
    backgroundColor: Colors.plumColor1,
    elevation: 4,
    shadowColor: Colors.plumColor2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: 'center',
    fontFamily: 'open-sans'
  },
  pressed: {
    opacity: 0.5,
  },
});

export default PrimaryButton;
