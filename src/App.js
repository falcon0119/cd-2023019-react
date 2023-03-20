import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ChildArea } from "./component/childArea";
import { Home } from "./component/Home";
import { Page1 } from "./component/Page1";
import { Page2 } from "./component/Page2";

export default function App() {
  const [text, settext] = useState("");
  const [open, setopen] = useState(false);
  const onChangetext = (e) => settext(e.target.value);
  const onClickchange = () => setopen(!open);
  const onClickClose = () => setopen(false);

  return (
    <>
      <div class="counter">
        <h1>表示切り替え</h1>
        <input value={text} onChange={onChangetext} />
        <br />
        <button onClick={onClickchange}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
        <div class="router">
          <Home />
          <Page1 />
          <Page2 />
        </div>
      </div>
    </>
  );
}
