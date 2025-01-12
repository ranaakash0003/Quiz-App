import React, {
  useState,
  useContext,
  PropsWithChildren,
  createContext,
  useEffect,
} from "react";
import questions from "../questions";
import { Question } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestions: number;
  bestScore: number;
};
const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
  bestScore: 0,
});

const QuesstionProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    getBestScore();
  }, []);

  useEffect(() => {
    if (isFinished === true && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished]);

  const getBestScore = async () => {
    try {
      const value = await AsyncStorage.getItem("best-score");
      if (value) {
        setBestScore(parseInt(value));
      }
    } catch (error) {}
  };

  const saveBestScore = async (score: number) => {
    try {
      await AsyncStorage.setItem("best-score", score.toString());
    } catch (error) {}
  };

  const reStart = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
  };

  const onNext = () => {
    if (isFinished) {
      reStart();
      return;
    }
    if (question?.correctAnswer === selectedOption) {
      setScore((prevScore) => prevScore + 1);
    }
    setQuestionIndex((prevQuestion) => prevQuestion + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuesstionProvider;
export const useQuizContext = () => useContext(QuizContext);
