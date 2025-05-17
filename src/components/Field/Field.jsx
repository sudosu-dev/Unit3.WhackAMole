import { useGame } from "../../context/GameContext/GameContext";
import "./field.css";

export default function Field() {
  const { HOLES, molePosition, whack } = useGame();
  const holes = Array.from({ length: HOLES }, (_, i) => i);
  return (
    <>
      <ul className="field">
        {holes.map((hole, index) => (
          <li
            key={index}
            className={index === molePosition ? "mole" : "hole"}
            onClick={index === molePosition ? whack : undefined}
          ></li>
        ))}
      </ul>
    </>
  );
}
