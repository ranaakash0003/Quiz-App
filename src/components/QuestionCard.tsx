import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card title={question.title}>
      <View style={styles.answer}>
        {question?.options.map((option, index) => (
          <AnswerOption key={index} option={option} />
        ))}
      </View>
    </Card>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  answer: {
    gap: 10,
  },
});
