import { useGame } from "../../context/GameContext/GameContext";

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
