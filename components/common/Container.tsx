import { View, ScrollView, StyleSheet, ViewComponent, StyleProp, ViewStyle } from "react-native";

interface IContainerProps {
  children: React.ReactNode;
  scrollable: boolean;
  smallHeight: boolean;
  style?: StyleProp<ViewStyle>
}

const Container: React.FC<IContainerProps> = ({
  children,
  scrollable,
  smallHeight,
  style
}) => {
  const marginTop = smallHeight ? 40 : 100;
  if (scrollable) {
    return (
      <ScrollView style={[styles.wrapper, { marginTop }, style]}>
        {children}
      </ScrollView>
    );
  }

  return <View style={[styles.wrapper, { marginTop }, style]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
