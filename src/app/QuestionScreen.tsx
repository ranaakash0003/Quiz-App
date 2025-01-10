import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";

const QuestionScreen = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const question = questions[questionIndex];

  const onNext = () => {
    setQuestionIndex((prevQuestion) => prevQuestion + 1);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Question {questionIndex + 1}/5</Text>
          </View>
          {question ? (
            <View>
              <QuestionCard question={question} />
              <Text style={styles.timer}>20 sec</Text>
            </View>
          ) : (
            <Card title="Well done">
              <Text>Correct answers: 3/5</Text>
              <Text>Score: 20</Text>
              <Button title="Back" onPress={() => setQuestionIndex(0)} />
            </Card>
          )}
          <CustomButton
            title="Next"
            onButtonPressed={onNext}
            buttonIcon={
              <FontAwesome6 name="arrow-right-long" size={16} color="white" />
            }
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#FDFEF4",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    color: "#005055",
    textAlign: "center",
  },
  timer: {
    marginVertical: 15,
    textAlign: "center",
    fontWeight: "500",
    color: "#005055",
  },
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
