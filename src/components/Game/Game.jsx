import Scoreboard from "../Scoreboard/Scoreboard";
import Field from "../Field/Field";

import(Field);
export default function Game() {
  return (
    <>
      <Scoreboard />
      <Field />
    </>
  );
}
