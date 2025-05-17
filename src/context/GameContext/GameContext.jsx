import { useState, useContext, createContext, useRef, useEffect } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  // === variables ===
  const HOLES = 9;

  const [playing, setPlaying] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [molePosition, setMolePosition] = useState(null);

  // === functions ===
  const intervalID = useRef(null);

  useEffect(() => {
    if (time === 0 && playing) {
      gameEnd();
    }
  }, [time, playing]);

  function countdown() {
    setTime((prevTime) => {
      if (prevTime <= 1) {
        clearInterval(intervalID.current);
        intervalID.current = null;

        return 0;
      }
      return prevTime - 1;
    });
  }

  function startCountdown() {
    if (!intervalID.current) {
      intervalID.current = setInterval(countdown, 1000);
    }
  }
  /**
   * generates a random number between 0 (inclusive) & num (exclusive)
   * @param {number} num - Upper bound for the random number (HOLES)
   * @returns {number} - A random integer from 0 to num - 1.
   */
  function generatePosition(holes) {
    return Math.floor(Math.random() * holes);
  }

  function updateHighScores() {
    if (highScores.length < 5 || score > Math.min(...highScores)) {
      const updated = [...highScores, score].sort((a, b) => b - a).slice(0, 5);
      setHighScores(updated);
    }
  }

  function gameStart() {
    setScore(0);
    setTime(15);
    setMolePosition(generatePosition(HOLES));
    setPlaying(true);
    startCountdown();
  }

  function gameEnd() {
    updateHighScores();
    clearInterval(intervalID.current);
    intervalID.current = null;
    setPlaying(false);
  }

  function whack() {
    const newScore = score + 1;
    setScore(newScore);

    let prev = molePosition;
    let next = generatePosition(HOLES);
    while (prev === next) {
      next = generatePosition(HOLES);
    }
    setMolePosition(next);
  }

  const value = {
    HOLES,
    playing,
    highScores,
    score,
    time,
    molePosition,
    startCountdown,
    gameStart,
    gameEnd,
    whack,
    generatePosition,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used with a GameProvider");
  return context;
}
