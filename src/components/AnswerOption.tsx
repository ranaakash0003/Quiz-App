import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { useQuizContext } from "../provider/QuesstionProvider";

type AnswerOptionProps = {
  option: string;
};

const AnswerOption = ({ option }: AnswerOptionProps) => {
  const { selectedOption, setSelectedOption } = useQuizContext();
  const isSelected = selectedOption === option;

  const onOptionPressed = (option: string) => {
    setSelectedOption(option);
  };

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
