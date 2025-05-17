import { useGame } from "../../context/GameContext/GameContext";
import "./welcomeMessage.css";
export default function WelcomeMessage() {
  const { gameStart } = useGame();
  return (
    <>
      <section className="welcome">
        <p>Welcome to Whack a Mole</p>
        <p>Whack a mole to earn points</p>
        <p>How many can you get?</p>
        <button onClick={gameStart}>Play</button>
      </section>
    </>
  );
}
