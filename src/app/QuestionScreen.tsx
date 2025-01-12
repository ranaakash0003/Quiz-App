import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import { useQuizContext } from "../provider/QuesstionProvider";
import { useTimer } from "../hooks/useTimer";
import LottieView from "lottie-react-native";
import party from "../../assets/party.json";

const QuestionScreen = () => {
  const { timer, startTimer, clearTimer } = useTimer(20);
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [question]);

  useEffect(() => {
    if (timer <= 0 && questionIndex < totalQuestions) {
      onNext();
    }
  }, [timer]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>
              Question {questionIndex + 1}/{totalQuestions}
            </Text>
          </View>
          {question ? (
            <View>
              <QuestionCard question={question} />
              <Text style={styles.timer}>{timer} sec</Text>
            </View>
          ) : (
            <>
              <LottieView
                style={StyleSheet.absoluteFill}
                autoPlay
                loop={false}
                source={party}
              />
              <Card title="Well done">
                <Text>
                  Correct answers: {score}/{totalQuestions}
                </Text>
                <Text>Best Score: {bestScore}</Text>
                {/* <Button title="Back" onPress={() => setQuestionIndex(0)} /> */}
              </Card>
            </>
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
