import { useGame } from "../../context/GameContext/GameContext";
import "./displayHighScore.css";

export default function DisplayHighScore() {
  const { highScores } = useGame();
  return (
    <>
      <section className="highscores">
        {highScores.length === 0 ? (
          <p>None yet... Play the game!</p>
        ) : (
          <ul>
            {highScores.map((highScore, index) => (
              <li key={index}>{highScore}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
