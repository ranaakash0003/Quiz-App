import React from "react";
import { StatusBar } from "expo-status-bar";
import QuestionScreen from "./src/app/QuestionScreen";
import QuesstionProvider from "./src/provider/QuesstionProvider";

export default function App() {
  return (
    <>
      <QuesstionProvider>
        <QuestionScreen />
      </QuesstionProvider>
      <StatusBar style="auto" />
    </>
  );
}
