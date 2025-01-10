import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

type AnswerOptionProps = {
  option: string;
  onOptionPressed: (option: string) => void;
  isSelected?: boolean;
};

const AnswerOption = ({
  option,
  onOptionPressed,
  isSelected,
}: AnswerOptionProps) => {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedOption]}
      onPress={() => {
        onOptionPressed(option);
      }}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};

export default AnswerOption;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "lightgray",
    borderWidth: 1,
  },
  selectedOption: {
    backgroundColor: "#005010",
    color: "white",
  },
});
