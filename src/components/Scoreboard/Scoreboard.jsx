import { useGame } from "../../context/GameContext/GameContext";
import "./scoreboard.css";

export default function Scoreboard() {
  const { score, time, gameEnd } = useGame();
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Time: {time}</p>
      <button onClick={gameEnd}>Restart</button>
    </div>
  );
}
