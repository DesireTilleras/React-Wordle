import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrent, setIsCorrect] = useState(false);

  const formatQuess = () => {};

  const addNewQuess = () => {};

  const handleKeyUp = () => {};
};
export default useWordle;
