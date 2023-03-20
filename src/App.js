import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ChildArea } from "./component/childArea";

export default function App() {
  const [text, settext] = useState("");
  const [open, setopen] = useState(false);
  const onChangetext = (e) => settext(e.target.value);
  const onClickchange = () => setopen(!open);

  return (
    <>
      <div class="counter">
        <h1>表示切り替え</h1>
        <input value={text} onChange={onChangetext} />
        <br />
        <button onClick={onClickchange}>表示</button>
        <ChildArea open={open} />
      </div>
    </>
  );
}
