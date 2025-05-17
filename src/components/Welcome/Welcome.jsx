import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import DisplayHighScore from "../HighScore/DisplayHighScore";

export default function Welcome() {
  console.log("Welcome is rendering");
  return (
    <>
      <WelcomeMessage />
      <DisplayHighScore />
    </>
  );
}
