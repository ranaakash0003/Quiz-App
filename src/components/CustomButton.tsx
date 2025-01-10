import {
  StyleSheet,
  Text,
  Pressable,
  View,
  PressableProps,
} from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type CustomButtonProps = {
  title: string;
  onButtonPressed: () => void;
  buttonIcon?: React.ReactNode;
} & PressableProps;

const CustomButton = ({
  title,
  onButtonPressed,
  buttonIcon,
  ...pressableProps
}: CustomButtonProps) => {
  return (
    <Pressable
      {...pressableProps}
      style={styles.button}
      onPress={onButtonPressed}
    >
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.buttonIcon}>{buttonIcon}</View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
});
