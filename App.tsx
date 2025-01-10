import React from "react";
import { StatusBar } from "expo-status-bar";
import QuestionScreen from "./src/app/QuestionScreen";

export default function App() {
  return (
    <>
      <QuestionScreen />
      <StatusBar style="auto" />
    </>
  );
}
