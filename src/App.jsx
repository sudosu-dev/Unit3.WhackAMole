import Welcome from "./components/Welcome/Welcome";
import Game from "./components/Game/Game";
import { useGame } from "./context/GameContext/GameContext";
export default function App() {
  const { playing } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {!playing ? <Welcome /> : <Game />}
    </>
  );
}
