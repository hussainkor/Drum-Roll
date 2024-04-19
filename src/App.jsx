import { useEffect } from "react";
import "./App.css";
import crash from "./assets/sounds/crash.mp3";
import kickAss from "./assets/sounds/kick-bass.mp3";
import snare from "./assets/sounds/snare.mp3";
import tom1 from "./assets/sounds/tom-1.mp3";
import tom2 from "./assets/sounds/tom-2.mp3";
import tom3 from "./assets/sounds/tom-3.mp3";
import tom4 from "./assets/sounds/tom-4.mp3";

function App() {
  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "w") {
        new Audio(crash).play();
      } else if (e.key === "a") {
        new Audio(kickAss).play();
      } else if (e.key === "s") {
        new Audio(snare).play();
      } else if (e.key === "d") {
        new Audio(tom1).play();
      } else if (e.key === "j") {
        new Audio(tom2).play();
      } else if (e.key === "k") {
        new Audio(tom3).play();
      } else {
        new Audio(tom4).play();
      }
    });
  }, []);
  return (
    <div className="drum-roll">
      <h1>Drum Beat</h1>
      <h2>Click on the any button or press the same key</h2>
      <div className="beats">
        <button className="drum w" onClick={() => new Audio(crash).play()}>
          w
        </button>
        <button className="drum a" onClick={() => new Audio(kickAss).play()}>
          a
        </button>
        <button className="drum s" onClick={() => new Audio(snare).play()}>
          s
        </button>
        <button className="drum d" onClick={() => new Audio(tom1).play()}>
          d
        </button>
        <button className="drum j" onClick={() => new Audio(tom2).play()}>
          j
        </button>
        <button className="drum k" onClick={() => new Audio(tom3).play()}>
          k
        </button>
        <button className="drum l" onClick={() => new Audio(tom4).play()}>
          l
        </button>
      </div>
    </div>
  );
}

export default App;
