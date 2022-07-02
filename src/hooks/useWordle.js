import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); //each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrent, setIsCorrect] = useState(false);

  const formatQuess = () => {
    console.log('Formatting the guess ---' + currentGuess);
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((letter)=>{
        return{key:letter, color:'grey'}
    })

    // find any green letters
    formattedGuess.forEach((l, i)=>{
        if(solutionArray[i]=== l.key){
            formattedGuess[i].color = 'green'
            solutionArray[i] = null
        }
    })

    //find any yellow letters
    formattedGuess.forEach((l,i)=>{
        if(solutionArray.includes(l.key) && l.color !== 'green'){
            formattedGuess[i].color = 'yellow'
            solutionArray[solutionArray.indexOf(l.key)] = null;
        }
    })

    return formattedGuess
  };

  const addNewQuess = () => {};

  const handleKeyUp = ({ key }) => {
    if(key === 'Enter'){
        //only add guess if turn is less than five
        if(turn > 5){
            console.log('You used all your guesses');
            return
        }
        //do not allow dublicate words
        if(history.includes(currentGuess)){
            console.log('You already tried that word');
            return
        }
        //The word has to be fice chars long
        if(currentGuess.length !== 5){
            console.log('Word must be 5 chars long');
            return
        }
        const formatted = formatQuess()
        console.log(formatted);

    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrent, handleKeyUp };
};
export default useWordle;
