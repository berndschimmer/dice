import * as React from "react";
import Dice from "react-dice-roll";
import "./styles.css";

export default function App({ handlerKey }: { handlerKey: string }) {
  return (
    <div className="App">
      <h1>React Dice Roll</h1>
      <Dice cheatValue={2} />
    </div>
  );
}
