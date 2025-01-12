import { useRef, useState } from "react";

export const useTimer = (maxTime: number) => {
  const [timer, setTimer] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    setTimer(maxTime);
    interval.current = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(interval.current);
  };

  return {
    timer,
    startTimer,
    clearTimer,
  };
};
